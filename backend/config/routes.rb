Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :characters, only: [:show, :index, :update] do
    resources :sayings, only: [:index, :create, :show, :update, :destroy]
  end

  resources :items, only: [:show, :index]
  resources :expressions, only: [:show]
end
