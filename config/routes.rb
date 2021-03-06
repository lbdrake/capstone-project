Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: {format: :json} do
    resources :projects
    resources :project_shares
    resources :todolists
    resources :tasks
  end
end
