class DiarySerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :image, :word_count, :status, :day, :month, :year, :w_day, :updated_at
  belongs_to :user, serializer: UserSerializer
  has_many :favorites, serializer: FavoriteSerializer

  def day
    object.created_at.strftime("%d")
  end

  def month
    month_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month_list[object.created_at.strftime("%m").to_i - 1]
  end

  def year
    object.created_at.strftime("%Y")
  end

  def w_day
    day_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    day_of_week[object.created_at.wday]
  end

  def updated_at
    object.updated_at.strftime("%Y-%m-%d")
  end
end
