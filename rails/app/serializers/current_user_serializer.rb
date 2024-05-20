class CurrentUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :country, :uni, :start_date, :end_date, :bio, :image, :total_likes_count
  has_many :diaries, serializer: DiarySerializer
  has_many :following
  has_many :followers

  def total_likes_count
    count = 0
    object.diaries.each do |diary|
      count += diary.favorites.length
    end
    count
  end
end
