ActiveRecord::Base.transaction do
  user1 = User.create!(name: "Megumi Jr.", email: "test1@example.com", password: "password", confirmed_at: Time.current, image: File.open("./public/images/1850951C-86C6-424C-B319-D650246376C2_4_5005_c.jpeg"), country: "NewZealand", uni: "Auckland", bio: "Hello!")

  user2 = User.create!(name: "Aya", email: "test2@example.com", password: "password", confirmed_at: Time.current, image: File.open("./public/images/6E633585-E231-45D0-92BF-83A0CC03E3DC_1_105_c.jpeg"), country: "USA", uni: "Kansas", bio: "Hello!")

  user3 = User.create!(name: "Ryo", email: "test3@example.com", password: "password", confirmed_at: Time.current, image: File.open("./public/images/D7C1316F-92C9-4509-9DBE-8C2BA932CF59_1_105_c.jpeg"), country: "Australia", uni: "Queensland", bio: "Hello!")

  user4 = User.create!(name: "Tanabe Ken", email: "test4@example.com", password: "password", confirmed_at: Time.current, image: File.open("./public/images/EBF649F1-8FCF-46E9-9EEB-79D86D34FB8F_1_105_c.jpeg"), country: "Canada", uni: "Alberta", bio: "Hello!")

  user5 = User.create!(name: "Haruto Aketa", email: "test5@example.com", password: "password", confirmed_at: Time.current, image: File.open("./public/images/6917C2F9-F127-411E-B180-5128956C03C2_1_105_c.jpeg"), country: "UK", uni: "Canterbury", bio: "Hello!")


  15.times do |i|
    Diary.create!(title: "Had ramen", content: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text", word_count: 100, status: :shared, user: user1)
    Diary.create!(title: "Party Night", content: "text text text text text text text text text text text text text text text text text text", word_count: 20, status: :shared, user: user2)
    Diary.create!(title: "Meet new friends!", content: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text", word_count: 140, status: :shared, user: user3)
    Diary.create!(title: "Went to New York", content: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text", word_count: 160, status: :shared, user: user4)
    Diary.create!(title: "Great day", content: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text", word_count: 180, status: :shared, user: user5)
  end
end
