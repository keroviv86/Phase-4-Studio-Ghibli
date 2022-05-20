Rails.application.routes.draw do
  
  resources :reviews
  resources :films
  resources :users
  # resources :sessions

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post "/signup", to: "users#create"
  get "/authorized_user", to: "users#show"

  get "/films/reviews/:id", to: "reviews#showForFilm"
  # destroy "/logout", to: "sessions#logout"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
