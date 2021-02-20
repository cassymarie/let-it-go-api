Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # resources :characters, only: [:show, :index, :update] do
  #   resources :sayings, only: [:index, :create, :show, :update, :destroy]
  # end

  resources :avatars, only: [:show, :index, :update] do
    resources :sayings, only: [:index, :create, :show, :update, :destroy]
  end

  resources :users, only: [:create, :show] do

  end


  resources :faces, only: [:index] 
  resources :items, only: [:show, :index]
  resources :expressions, only: [:index, :show]
end
