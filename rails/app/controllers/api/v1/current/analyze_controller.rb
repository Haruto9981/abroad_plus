class Api::V1::Current::AnalyzeController < Api::V1::BaseController
  require "engtagger"
  require "lemmatizer"

  before_action :authenticate_user!
  STOPWORDS = %w[a an and are as at be by for from has have he her his in it its is on or she that the they to was with it’s i’m couldn’t].freeze

  def frequent_vocab
    target_month = params["target-month"]
    diaries = fetch_diaries_for_month(target_month)

    if diaries.empty?
      render json: []
      return
    end
    
    target_text = combine_diary_contents(diaries)
    
    tagged_text = tag_text(target_text)
    parts_of_speech = extract_parts_of_speech(tagged_text)
    
    processed_words = process_parts_of_speech(parts_of_speech)

    render json: processed_words
  end

  private

  def fetch_diaries_for_month(target_month)
    start_date = Date.parse("#{target_month}-01")
    end_date = start_date.end_of_month
    
    current_user.diaries
                .where(created_at: start_date..end_date)
                .select(:content)
  end

  def combine_diary_contents(diaries)
    diaries.pluck(:content).join(" ")
  end

  def tag_text(text)
    tgr = EngTagger.new
    tgr.add_tags(text)
  end

  def extract_parts_of_speech(tagged_text)
    tgr = EngTagger.new
    {
      nouns: tgr.get_nouns(tagged_text),
      verbs: tgr.get_verbs(tagged_text),
      adjectives: tgr.get_adjectives(tagged_text),
      adverbs: tgr.get_adverbs(tagged_text)
    }
  end

  def process_parts_of_speech(parts_of_speech)
    lemmatizer = Lemmatizer.new
    parts_of_speech.transform_values do |words|
      process_words(words, lemmatizer)
    end
  end

  def process_words(words, lemmatizer)
    lemmatized_counts = words.each_with_object(Hash.new(0)) do |(word, count), hash|
      lemmatized_word = lemmatizer.lemma(word).downcase
      next if STOPWORDS.include?(lemmatized_word)
      hash[lemmatized_word] += count
    end
  
    lemmatized_counts.map do |word, count|
      { lemmatized: word, count: count }
    end.sort_by { |word| -word[:count] }.first(10)
  end  
end
