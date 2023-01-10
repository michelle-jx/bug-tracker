Rails.application.routes.draw do
  resources :solutions
  resources :tickets
  resources :projects
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '/hello', to: 'application#hello_world'
  post '/auth', to: 'sessions#create'
  delete '/auth', to: 'sessions#destroy'
  get '/me', to: 'users#show'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
