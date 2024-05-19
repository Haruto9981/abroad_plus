Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
  namespace :api do
    namespace :v1 do
      get "health_check", to: "health_check#index"
      mount_devise_token_auth_for "User", at: "auth"
      resources :users, only: [:show] do
        member do
          get :following
          get :followers
        end
      end
      namespace :user do
        resource :confirmations, only: [:update]
      end
      namespace :current do
        resource :user, only: [:show, :update]
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
