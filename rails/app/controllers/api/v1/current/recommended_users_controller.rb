class Api::V1::Current::RecommendedUsersController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
    limit = 5
    recommended_users = fetch_recommended_users(limit)
    render json: recommended_users
  end

  private

    # 同じ大学、同じ国、フォローしているユーザーのフォローしているユーザーを取得。（優先度は　同じ大学 > 同じ国　> ファローのフォロー)
    def fetch_recommended_users(limit)
      recommended_users = []

      if current_user.country && current_user.uni
        recommended_users += fetch_same_uni_users(limit)
        recommended_users += fetch_same_country_users(limit - recommended_users.size) if recommended_users.size < limit
        recommended_users.uniq!
        recommended_users += fetch_following_of_following_users(limit - recommended_users.size) if recommended_users.size < limit
        recommended_users.uniq!
      end

      recommended_users
    end

    def fetch_same_uni_users(limit)
      User.where(uni: current_user.uni).
        where.not(id: excluded_user_ids).
        limit(limit).includes([:followers]).includes([:following])
    end

    def fetch_same_country_users(limit)
      User.where(country: current_user.country).
        where.not(id: excluded_user_ids).
        limit(limit).includes([:followers]).includes([:following])
    end

    def fetch_following_of_following_users(limit)
      following_of_following_user_ids = Relationship.where(follower_id: following_user_ids).
                                          where.not(followed_id: excluded_user_ids).
                                          pluck(:followed_id)

      User.where(id: following_of_following_user_ids).
        where.not(id: excluded_user_ids).
        limit(limit).includes([:followers]).includes([:following])
    end

    def following_user_ids
      @following_user_ids ||= current_user.following.pluck(:id)
    end

    def excluded_user_ids
      @excluded_user_ids ||= following_user_ids + [current_user.id]
    end
end
