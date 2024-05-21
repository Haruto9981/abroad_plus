class Api::V1::Current::FollowingDiariesController < Api::V1::BaseController
  before_action :authenticate_user!
  include Pagination

  def index
    following_user_ids = current_user.following.pluck(:id)
    diaries = Diary.where(user_id: following_user_ids).not_unsaved.order(created_at: :desc).page(params[:page] || 1).per(10).includes([:favorites]).includes([:diary_comments])
    render json: diaries, meta: pagination(diaries), adapter: :json
  end
end
