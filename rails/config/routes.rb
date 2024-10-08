Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
  namespace :api do
    namespace :v1 do
      get "health_check", to: "health_check#index"
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        sessions: "api/v1/current/sessions",
      }
      resources :users, only: [:show] do
        member do
          get :diaries
          get :following
          get :followers
        end
      end
      namespace :user do
        resource :confirmations, only: [:update]
      end
      namespace :current do
        get "analyze/frequent_vocab", to: "analyze#frequent_vocab"
        get "analyze/sentiment", to: "analyze#sentiment"
        resource :user, only: [:show, :update]
        resources :following_diaries, only: [:index]
        resources :recommended_users, only: [:index]
        resources :diaries, only: [:index, :show, :create, :update, :destroy]
        resource :relationships, only: [:create, :destroy]
      end
      resources :diaries, only: [:index, :show] do
        resources :diary_comments, only: [:index, :create, :destroy]
        resource :favorites, only: [:show, :create, :destroy]
      end
    end
  end
end
