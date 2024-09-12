class Api::V1::Current::AnalyzeController < Api::V1::BaseController
  require 'engtagger'
  before_action :authenticate_user!

  def frequent_vocab
    tgr = EngTagger.new
    diaries = current_user.diaries.order(created_at: :desc).limit(30)
    target_text = diaries.pluck(:content).join(" ")
    tagged = tgr.add_tags(target_text)
    noun = tgr.get_nouns(tagged)
    adjective = tgr.get_adjectives(tagged)
    verb = tgr.get_verbs(tagged)
    pairs = tgr.tag_pairs(target_text)

    render json: pairs
  end
end
