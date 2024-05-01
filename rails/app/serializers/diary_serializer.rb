class DiarySerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :image_url, :word_count, :status, :created_at, :date, :w_day
  belongs_to :user, serializer: UserSerializer

  def status
    object.status_i18n
  end

  def created_at
    object.created_at.strftime("%Y/%m/%d")
  end

  def date
    day = object.created_at.strftime('%d')

    month_list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    month = month_list[object.created_at.strftime('%m').to_i - 1]

    year = object.created_at.strftime('%Y')

    return "#{day} #{month} #{year}"
  end

  def w_day
    day_of_week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    day_of_week[object.created_at.wday]
  end
end
