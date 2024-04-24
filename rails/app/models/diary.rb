class Diary < ApplicationRecord
  belongs_to :user
  enum :status, { unsaved: 10, personal: 20, shared: 30 }, _prefix: true
  validates :title, :content, :word_count, presence: true, if: -> { personal? || shared? }
  validate :verify_only_one_unsaved_status_is_allowed

  private

    def verify_only_one_unsaved_status_is_allowed
      if unsaved? && user.diaries.unsaved.present?
        raise StandardError, "未保存の記事は複数保有できません"
      end
    end
end