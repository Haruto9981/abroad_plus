class Api::V1::UsersController < Api::V1::BaseController
  include Pagination
  def show
    @user = User.find_by(name: params[:id])

    if @user
      diaries = @user.diaries.where(status: "shared").page(params[:page] || 1).per(10).includes([:favorites]).includes([:diary_comments])
      total_diaries = @user.diaries.not_unsaved.includes([:favorites])

      # serializerファイルを利用したincludeオプションを使うアプローチはページネーションが上手く働かないため、独自の関数を定義。
      render json: { profile: user_with_diaries_json(@user, diaries),
                     meta: pagination(diaries), total_diaries_count: total_diaries.count, total_likes_count: total_likes_count(total_diaries) },
             adapter: :json
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def following
    @title = "Following"
    @user  = User.find_by(name: params[:id])
    @users = @user.following
    render json: @users
  end

  def followers
    @title = "Followers"
    @user  = User.find_by(name: params[:id])
    @users = @user.followers
    render json: @users
  end

  private

    def user_with_diaries_json(user, diaries)
      {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        start_date: user.start_date,
        end_date: user.end_date,
        country: user.country,
        uni: user.uni,
        bio: user.bio,
        diaries: diaries.map {|diary| diary_json(diary) },
        following: user.following,
        followers: user.followers,
      }
    end

    def diary_json(diary)
      {
        id: diary.id,
        title: diary.title,
        content: diary.content,
        image: diary.image,
        word_count: diary.word_count,
        status: diary.status,
        day: diary.created_at.strftime("%d"),
        month: diary.created_at.strftime("%m"),
        month_name: month_name(diary),
        w_day: w_day(diary),
        year: diary.created_at.strftime("%Y"),
        created_at: diary.created_at.strftime("%Y-%m-%d"),
        favorites: diary.favorites.map {|favorite| favorite_json(favorite) },
        diary_comments: diary.diary_comments.map {|comment| diary_comment_json(comment) },
      }
    end

    def month_name(diary)
      month_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      month_list[diary.created_at.strftime("%m").to_i - 1]
    end

    def w_day(diary)
      day_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      day_of_week[diary.created_at.wday]
    end

    def favorite_json(favorite)
      {
        id: favorite.id,
        user_id: favorite.user_id,
        diary_id: favorite.diary_id,
      }
    end

    def diary_comment_json(comment)
      {
        id: comment.id,
        user_id: comment.user_id,
        diary_id: comment.diary_id,
        comment: comment.comment,
      }
    end

    def total_likes_count(diaries)
      count = 0
      diaries.each do |diary|
        count += diary.favorites.length
      end
      count
    end
end
