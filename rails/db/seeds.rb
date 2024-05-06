ActiveRecord::Base.transaction do
  user1 = User.create!(name: "Megumi Jr.", email: "test1@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/F4F46FAC-089C-40B0-BE5A-005E3C8440AA_4_5005_c.jpeg"),
                       country: "NewZealand", uni: "Auckland", bio: "Hello!")

  user2 = User.create!(name: "Aya", email: "test2@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/6E633585-E231-45D0-92BF-83A0CC03E3DC_1_105_c.jpeg"),
                       country: "USA", uni: "Kansas", bio: "Hello!")

  user3 = User.create!(name: "Ryo", email: "test3@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/0477E005-3F30-4EE5-A073-6582185CE9E7_4_5005_c.jpeg"),
                       country: "Australia", uni: "Queensland", bio: "Hello!")

  user4 = User.create!(name: "Tanabe Ken", email: "test4@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/EBF649F1-8FCF-46E9-9EEB-79D86D34FB8F_1_105_c.jpeg"),
                       country: "Canada", uni: "Alberta", bio: "Hello!")

  user5 = User.create!(name: "Haruto Aketa", email: "test5@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/6917C2F9-F127-411E-B180-5128956C03C2_1_105_c.jpeg"),
                       country: "UK", uni: "Canterbury", bio: "Hello!")

  15.times do |_i|
    Diary.create!(title: "Had ramen",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user1)
    Diary.create!(title: "Party Night",
                  content: "text text text text text text text text text text text text text text text text text text", word_count: 18,
                  status: :shared, user: user2)
    Diary.create!(title: "Meet new friends!",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user3)
    Diary.create!(title: "Went to New York",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user4)
    Diary.create!(title: "Great day",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user5)
  end
end
