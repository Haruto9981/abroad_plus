class Api::V1::Current::RelationshipsController < Api::V1::BaseController
  before_action :authenticate_user!
  before_action :set_user

  def create
    current_user.follow(@user)
    render json: @user
  end

  def destroy
    current_user.unfollow(@user)
    render json: @user
  end

  private

    def set_user
      @user = User.find(params[:followed_id])
    end
end
