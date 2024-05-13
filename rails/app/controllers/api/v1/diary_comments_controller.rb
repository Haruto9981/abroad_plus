class Api::V1::DiaryCommentsController < Api::V1::BaseController
  def index
    comment = DiaryComment.where(diary_id: params[:diary_id]).includes([:user])
    render json: comment
  end

  def create
    diary = Diary.find(params[:diary_id])
    comment = current_user.diary_comments.new(diary_comment_params)
    comment.diary_id = diary.id
    comment.save!
    render json: comment
  end

  def destroy
    comment = DiaryComment.find(params[:id])
    comment.destroy!
    render json: comment
  end

  private

    def diary_comment_params
      params.require(:diary_comment).permit(:comment)
    end
end
