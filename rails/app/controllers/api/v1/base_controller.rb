class Api::V1::BaseController < ApplicationController
  alias_method :current_user, :current_api_v1_user
  alias_method :authenticate_user!, :authenticate_api_v1_user!
  alias_method :user_signed_in?, :api_v1_user_signed_in?
  before_action :set_time_zone

  private

    def set_time_zone
      if current_user && current_user.time_zone.present?
        Time.zone = current_user.time_zone
      end
    end
end
