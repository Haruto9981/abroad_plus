class Api::V1::Current::DiariesController < Api::V1::BaseController
  before_action :authenticate_user!

  def create
    unsaved_diary = current_user.diaries.unsaved.first || current_user.diaries.create!(status: :unsaved)
    render json: unsaved_diary
  end

  def update
    diary = current_user.diaries.find(params[:id])
    diary.update!(diary_params)
    render json: diary
  end

  private

    def diary_params
      params.require(:diary).permit(:title, :content, :image_url, :word_count, :status)
    end
end
