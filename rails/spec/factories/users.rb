FactoryBot.define do
  factory :user do
    name { Faker::Alphanumeric.alphanumeric(number: 10) }
    sequence(:email) {|n| "#{n}_" + Faker::Internet.email }
    password { Faker::Internet.password(min_length: 10) }
    confirmed_at { Time.current }
  end
end
