class Api::V1::Current::UsersController < Api::V1::BaseController
  before_action :authenticate_user!

  def show
    render json: current_user, serializer: CurrentUserSerializer
  end

  def update
    current_user.update!(user_params)
    render json: current_user, serializer: CurrentUserSerializer
  end

  private

    def user_params
      params.require(:user).permit(:name, :country, :uni, :start_date, :end_date, :bio)
    end
end
