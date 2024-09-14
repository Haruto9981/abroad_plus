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
  end_date = Date.new(2024, 7, 28)

  10.times do |_i|
    Diary.create!(title: "Had ramen",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: rand(50..200), status: :shared, user: user1,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
    Diary.create!(title: "Party Night",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: rand(50..200), status: :shared, user: user2,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
    Diary.create!(title: "Meet new friends!",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: rand(50..200), status: :shared, user: user3,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
    Diary.create!(title: "Went to New York",
                  content: "text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text", word_count: rand(50..200), status: :shared, user: user4,
                  image: open("./public/images/sample#{_i}.jpeg"),
                  created_at: rand(start_date..end_date),
                  updated_at: rand(start_date..end_date))
  end

  start_date = Date.new(2023, 9, 1)
  end_date = Date.new(2024, 9, 1)

  50.times do |_i|
    Diary.create!(
      title: "Had ramen",
      content: "Today has been one of those days that makes me question if things will ever get better. Everything seemed to go wrong " \
               "from the moment I woke up. I was late for work because my alarm didn’t go off, and it felt like I was constantly playing " \
               "catch-up. My boss was in a bad mood, which only added to the stress of the day. I couldn’t focus on my tasks, and no matter " \
               "how hard I tried, I couldn’t seem to get anything right. To make matters worse, I had an argument with a close friend. It wasn’t " \
               "anything major, but it left me feeling hurt and frustrated. I’ve been trying to understand their perspective, but it’s hard to " \
               "see past my own feelings of betrayal. I hate that things are strained between us now, and it’s weighing heavily on my mind. " \
               "On top of all this, I feel incredibly isolated. I haven’t been able to connect with anyone on a meaningful level lately. " \
               "I keep telling myself that things will improve, but today, it’s hard to see any light at the end of the tunnel. I’m just exhausted " \
               "and overwhelmed, and it’s hard to stay motivated when everything seems so bleak. I’m hoping tomorrow will bring a fresh start, " \
               "but right now, I’m struggling to stay positive. It feels like no matter how much effort I put in, nothing ever seems to change " \
               "for the better.",
      word_count: rand(50..200),
      status: :shared,
      user: user5,
      image: open("./public/images/sample1.jpeg"),
      created_at: rand(start_date..end_date),
      updated_at: rand(start_date..end_date),
    )
  end

  50.times do |_i|
    Diary.create!(
      title: "Had ramen",
      content: "Today was a series of small disasters. I woke up late and missed an important meeting, which set a negative tone " \
               "for the entire day. My co-workers were understandably frustrated, and I couldn’t shake off the feeling of inadequacy. " \
               "The tasks that followed seemed insurmountable, and despite my best efforts, I felt like I was just spinning my wheels. " \
               "Everything feels like it's piling up, and I’m finding it hard to see a way out of this mess.",
      word_count: rand(50..200),
      status: :shared,
      user: user5,
      image: open("./public/images/sample1.jpeg"),
      created_at: rand(start_date..end_date),
      updated_at: rand(start_date..end_date),
    )
  end

  50.times do |_i|
    Diary.create!(
      title: "Had ramen",
      content: "Today turned out to be quite rewarding. I tackled a challenging project at work and felt a great sense of " \
               "accomplishment once it was completed. I also had the chance to catch up with an old friend over lunch, which was both " \
               "enjoyable and uplifting. In the evening, I took some time to relax and indulge in a favorite hobby, which helped me unwind. " \
               "It’s days like these that remind me of the importance of celebrating small victories and taking time for myself.",
      word_count: rand(50..200),
      status: :shared,
      user: user5,
      image: open("./public/images/sample1.jpeg"),
      created_at: rand(start_date..end_date),
      updated_at: rand(start_date..end_date),
    )
  end

  Diary.create!(
    id: "1O2GvHTXc_0d-g",
    title: "Test for Likes",
    content: "I’m increasingly concerned that this project is headed for failure. The lack of progress and constant setbacks suggest " \
             "we’re unlikely to meet our goals. Team morale is low, and it feels like our efforts are just not yielding the results we hoped for.",
    word_count: rand(50..200),
    status: :shared,
    user: user5,
    image: open("./public/images/sample1.jpeg"),
  )

  users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19,
           user20]

  users.each do |user|
    Favorite.create!(user:, diary_id: "1O2GvHTXc_0d-g")
  end
end
