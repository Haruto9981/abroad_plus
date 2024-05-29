class CurrentUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :country, :uni, :start_date, :end_date, :bio, :image,
             :total_likes_count, :total_diaries_count
  has_many :diaries, serializer: DiarySerializer
  has_many :following
  has_many :followers

  # 日記にlikeされた数
  def total_likes_count
    count = 0

    object.diaries.each do |diary|
      count += diary.favorites.length
    end

    count
  end

  # 未保存の日記(New Diaryを押して生成されたが、Saveはされていない日記)の数は省く。
  def total_diaries_count
    object.diaries.not_unsaved.length
  end
end
