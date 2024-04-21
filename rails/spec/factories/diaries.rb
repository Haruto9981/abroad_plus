FactoryBot.define do
  factory :diary do
    user
    title { Faker::Lorem.sentence }
    content { Faker::Lorem.paragraph }
    word_count { Faker::Number.number(digits: 3) }
    status { :shared }
  end
end
