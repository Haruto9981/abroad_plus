class DiaryCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :diary_id, :from_today
  belongs_to :user, serializer: UserSerializer

  def from_today # rubocop:disable Metrics/AbcSize
    now = Time.zone.now
    created_at = object.created_at

    months = (now.year - created_at.year) * 12 + now.month - created_at.month - ((now.day >= created_at.day) ? 0 : 1)
    years = months.div(12)

    return "#{years} years ago" if years > 0
    return "#{months} months ago" if months > 0

    seconds = (Time.zone.now - object.created_at).round

    days = seconds / (60 * 60 * 24)
    return "#{days} days ago" if days.positive?

    hours = seconds / (60 * 60)
    return "#{hours} hours ago" if hours.positive?

    minutes = seconds / 60
    return "#{minutes} minutes ago" if minutes.positive?

    "#{seconds} seconds ago"
  end
end
