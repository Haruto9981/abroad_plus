class Api::V1::DiariesController < Api::V1::BaseController
  include Pagination

  def index
    diaries = Diary.shared.order(created_at: :desc).page(params[:page] || 1).per(10).includes(:user).includes([:favorites])
    render json: diaries, meta: pagination(diaries), adapter: :json
  end

  def show
    diary = Diary.shared.find(params[:id])
    render json: diary
  end
end
