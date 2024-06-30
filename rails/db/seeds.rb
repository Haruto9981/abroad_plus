ActiveRecord::Base.transaction do
  user1 = User.create!(name: "megumii11", email: "test1@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/F4F46FAC-089C-40B0-BE5A-005E3C8440AA_4_5005_c.jpeg"),
                       country: "NewZealand", uni: "Auckland", bio: "Hello!")

  user2 = User.create!(name: "Ryo_98_ta", email: "test2@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/6E633585-E231-45D0-92BF-83A0CC03E3DC_1_105_c.jpeg"),
                       country: "USA", uni: "Kansas", bio: "Hello!")

  user3 = User.create!(name: "aya1192", email: "test3@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/0477E005-3F30-4EE5-A073-6582185CE9E7_4_5005_c.jpeg"),
                       country: "Australia", uni: "Queensland", bio: "Hello!")

  user4 = User.create!(name: "TanabeKen", email: "test4@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/EBF649F1-8FCF-46E9-9EEB-79D86D34FB8F_1_105_c.jpeg"),
                       country: "Canada", uni: "Alberta", bio: "Hello!")

  user5 = User.create!(name: "haruto_aketa123", email: "test5@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/6917C2F9-F127-411E-B180-5128956C03C2_1_105_c.jpeg"),
                       country: "UK", uni: "Canterbury", bio: "Hello!")

  user6 = User.create!(name: "Ryo_98_taa", email: "test6@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/6E633585-E231-45D0-92BF-83A0CC03E3DC_1_105_c.jpeg"),
                       country: "USA", uni: "Kansas", bio: "Hello!")

  user7 = User.create!(name: "aya11922", email: "test7@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/0477E005-3F30-4EE5-A073-6582185CE9E7_4_5005_c.jpeg"),
                       country: "Australia", uni: "Queensland", bio: "Hello!")

  user8 = User.create!(name: "TanabeKenn", email: "test8@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/EBF649F1-8FCF-46E9-9EEB-79D86D34FB8F_1_105_c.jpeg"),
                       country: "Canada", uni: "Alberta", bio: "Hello!")

  user9 = User.create!(name: "haruto_aketa1234", email: "test9@example.com", password: "password", confirmed_at: Time.current,
                       image: File.open("./public/images/87F318A6-B049-40F2-AEFF-9F97E6D25063_4_5005_c.jpeg"),
                       country: "UK", uni: "Canterbury", bio: "Hello!")

  user10 = User.create!(name: "aya119222", email: "test10@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/0477E005-3F30-4EE5-A073-6582185CE9E7_4_5005_c.jpeg"),
                        country: "Australia", uni: "Queensland", bio: "Hello!")

  user11 = User.create!(name: "Ryo_98_taaaa", email: "test11@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/6E633585-E231-45D0-92BF-83A0CC03E3DC_1_105_c.jpeg"),
                        country: "USA", uni: "Kansas", bio: "Hello!")

  user12 = User.create!(name: "aya119211", email: "test12@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/0477E005-3F30-4EE5-A073-6582185CE9E7_4_5005_c.jpeg"),
                        country: "Australia", uni: "Queensland", bio: "Hello!")

  user13 = User.create!(name: "TanabeKento", email: "test13@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/EBF649F1-8FCF-46E9-9EEB-79D86D34FB8F_1_105_c.jpeg"),
                        country: "Canada", uni: "Alberta", bio: "Hello!")

  user14 = User.create!(name: "haruto_aketa12321", email: "test14@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/827120BA-FD2A-48AF-9F8C-2EE0105BF5AE_4_5005_c.jpeg"),
                        country: "UK", uni: "Aston", bio: "Hello!")

  user15 = User.create!(name: "Ryo_98_tako", email: "test15@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/6E633585-E231-45D0-92BF-83A0CC03E3DC_1_105_c.jpeg"),
                        country: "USA", uni: "Kansas", bio: "Hello!")

  user16 = User.create!(name: "aya1185", email: "test16@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/0477E005-3F30-4EE5-A073-6582185CE9E7_4_5005_c.jpeg"),
                        country: "Australia", uni: "Queensland", bio: "Hello!")

  user17 = User.create!(name: "Tanabe_ken", email: "test17@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/EBF649F1-8FCF-46E9-9EEB-79D86D34FB8F_1_105_c.jpeg"),
                        country: "Canada", uni: "Alberta", bio: "Hello!")

  user18 = User.create!(name: "haruto_aketa321", email: "test18@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/80550F09-3687-486F-BD8F-34A4E99FF052_4_5005_c.jpeg"),
                        country: "UK", uni: "Canterbury", bio: "Hello!")

  user19 = User.create!(name: "aya11", email: "test19@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/0477E005-3F30-4EE5-A073-6582185CE9E7_4_5005_c.jpeg"),
                        country: "Australia", uni: "Queensland", bio: "Hello!")

  user20 = User.create!(name: "aya92", email: "test20@example.com", password: "password", confirmed_at: Time.current,
                        image: File.open("./public/images/0477E005-3F30-4EE5-A073-6582185CE9E7_4_5005_c.jpeg"),
                        country: "Australia", uni: "Queensland", bio: "Hello!")

  require "date"

  start_date = Date.new(2024, 5, 15)
  end_date = Date.new(2024, 6, 1)

  10.times do |_i|
    Diary.create!(title: "Had ramen",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user1,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
    Diary.create!(title: "Party Night",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 18, status: :shared, user: user2,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
    Diary.create!(title: "Meet new friends!",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user3,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
    Diary.create!(title: "Went to New York",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user4,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
    Diary.create!(title: "Exciting Day",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user5,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
  end

  Diary.create!(id: "1O2GvHTXc_0d-g", title: "Test for Likes",
                content: "text text text text text text text text text text text text
                text text text text text text text text text text text text text text
                text text text text text text text text text text text text text text
                text text text text text text text text text text text text text text", word_count: 54, status: :shared, user: user5,
                image: open("./public/images/sample1.jpeg"))

  users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19,
           user20]

  users.each do |user|
    Favorite.create!(user:, diary_id: "1O2GvHTXc_0d-g")
  end
end
