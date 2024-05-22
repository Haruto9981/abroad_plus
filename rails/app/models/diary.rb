class Diary < ApplicationRecord
  before_create :set_id
  belongs_to :user
  has_many :favorites, dependent: :destroy
  has_many :diary_comments, dependent: :destroy
  mount_uploader :image, ImageUploader
  enum :status, { unsaved: 10, personal: 20, shared: 30 }, _prefix: true
  validates :title, :content, :word_count, presence: true, if: -> { personal? || shared? }
  validates :title, length: { maximum: 75 }
  # validate :verify_only_one_unsaved_status_is_allowed

  # def verify_only_one_unsaved_status_is_allowed
  #   if unsaved? && user.diaries.unsaved.present?
  #     raise StandardError, "未保存の記事は複数保有できません"
  #   end
  # end
  private

  def set_id
    while self.id.blank? || Diary.find_by(id: self.id).present? do
      self.id = SecureRandom.urlsafe_base64(10)
    end
  end
end
