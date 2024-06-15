class Api::V1::UsersController < Api::V1::BaseController
  before_action :set_user
  include Pagination

  def show
    render json: @user
  end

  def diaries
    diaries = @user.diaries.shared.order(created_at: :desc).page(params[:page] || 1).per(10).includes([:favorites]).includes([:diary_comments])
    render json: diaries, meta: pagination(diaries), adapter: :json
  end

  def following
    @users = @user.following.page(params[:page] || 1).per(20).includes([:following]).includes([:followers])
    render json: @users, meta: pagination(@users), adapter: :json
  end

  def followers
    @users = @user.followers.page(params[:page] || 1).per(20).includes([:following]).includes([:followers])
    render json: @users, meta: pagination(@users), adapter: :json
  end

  private

    def set_user
      @user = User.find_by(name: params[:id])
    end
end
