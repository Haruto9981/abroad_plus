class Api::V1::Current::SessionsController < DeviseTokenAuth::SessionsController
  def create
    super do |user|
      if params[:time_zone].present?
        user.update!(time_zone: params[:time_zone])
      end
    end
  end
end
