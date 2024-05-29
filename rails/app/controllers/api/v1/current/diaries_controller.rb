class Api::V1::Current::DiariesController < Api::V1::BaseController
  before_action :authenticate_user!
  before_action :set_diary, only: [:show, :update, :destroy]

  def index
    diaries = current_user.diaries.not_unsaved.order(created_at: :desc).includes([:favorites]).includes([:diary_comments])
    render json: diaries
  end

  def show
    render json: @diary
  end

  # New Diaryボタンを押した時点で走る。
  def create
    unsaved_diary = current_user.diaries.unsaved.first || current_user.diaries.create!(status: :unsaved)

    # 日記を作成(New Diary)ボタンを押したが、その後Saveしなかった場合、次回日記作成時に前回作成時点の日付が表示される問題を防ぐための処理。
    if unsaved_diary.created_at.strftime("%Y-%m-%d") != Time.zone.now.strftime("%Y-%m-%d")
      unsaved_diary.update!(created_at: Time.zone.now, updated_at: Time.zone.now)
    end

    render json: unsaved_diary
  end

  # Saveボタンを押した時点で走る。
  def update
    @diary.update!(diary_params)
    render json: @diary
  end

  def destroy
    @diary.destroy!
    render json: @diary
  end

  private

    def diary_params
      params.require(:diary).permit(:title, :content, :image, :word_count, :status)
    end

    def set_diary
      @diary = current_user.diaries.find(params[:id])
    end
end
