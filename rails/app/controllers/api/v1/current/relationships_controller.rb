class Api::V1::Current::RelationshipsController < Api::V1::BaseController
    before_action :authenticate_user!
    def create
        user = User.find(params[:followed_id])
        current_user.follow(user)
        render json: user
    end
    
    def destroy
        user = Relationship.find(params[:id]).followed
        current_user.unfollow(user)
        render json: user
    end
end