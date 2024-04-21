ActiveRecord::Base.transaction do
  user1 = User.create!(name: "テスト太郎", email: "test1@example.com", password: "password", confirmed_at: Time.current)

  user2 = User.create!(name: "テスト次郎", email: "test2@example.com", password: "password", confirmed_at: Time.current)

  15.times do |i|
    Diary.create!(title: "テストタイトル1-#{i}", content: "テスト本文1-#{i}", word_count: 100, status: :shared, user: user1)
    Diary.create!(title: "テストタイトル2-#{i}", content: "テスト本文2-#{i}", word_count: 100, status: :shared, user: user2)
  end
end
