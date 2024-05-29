class Api::V1::DiaryCommentsController < Api::V1::BaseController
  def index
    comment = DiaryComment.where(diary_id: params[:diary_id]).includes([:user])
    render json: comment
  end

  def create
    comment = current_user.diary_comments.create!(diary_comment_params.merge(diary_id: params[:diary_id]))
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
