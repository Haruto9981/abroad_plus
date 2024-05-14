class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :uni, :start_date, :end_date, :bio, :image
  has_many :diaries, serializer: DiarySerializer
end
