class Api::V1::FavoritesController < Api::V1::BaseController
  before_action :authenticate_user!
  include Pagination

  def show
    @diary_favorites = Favorite.where(diary_id: params[:diary_id]).page(params[:page] || 1).per(10)
    render json: @diary_favorites, each_serializer: FavoriteSerializer, meta: pagination(@diary_favorites), adapter: :json
  end

  def create
    @diary_favorite = Favorite.new(user_id: current_user.id, diary_id: params[:diary_id])
    @diary_favorite.save!
    render json: @diary_favorite
  end

  def destroy
    @diary_favorite = Favorite.find_by(user_id: current_user.id, diary_id: params[:diary_id])
    @diary_favorite.destroy!
    render json: @diary_favorite
  end
end
