require "ruby-spacy"
require "terminal-table"

nlp = Spacy::Language.new("en_core_web_md")
doc = nlp.read("Today felt like a calm, reflective day. I spent the morning with a cup of coffee, staring out the window as the world moved around me. There’s something peaceful about watching life unfold in small, quiet moments. I had plans to get some work done, but I decided to take it slow instead. I’ve been feeling a bit overwhelmed lately, so I figured a day of relaxation might help. In the afternoon, I went for a walk in the park. The weather was perfect, warm with a gentle breeze. I found a bench under a tree and just sat there for a while, watching people pass by. It reminded me how important it is to take time to pause, even when there’s so much to do. I ended the day by reading a few chapters of a book I’ve been meaning to finish. It felt nice to disconnect from everything for a while. I think I’ll try to make more days like this in the future.")

headings = ["text", "lemma", "pos", "tag", "dep"]
rows = []

doc.each do |token|
  rows << [token.text, token.lemma, token.pos, token.tag, token.dep]
end

table = Terminal::Table.new rows: rows, headings: headings
puts table