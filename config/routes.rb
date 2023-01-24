Rails.application.routes.draw do
  resources :solutions
  resources :tickets
  resources :projects
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '/hello', to: 'application#hello_world'
  post '/login', to: 'sessions#create'
  delete '/login', to: 'sessions#destroy'
  post '/signup', to: 'sessions#create' # need fix create method later?
  get '/me', to: 'users#show'
  get '/tickets', to: 'tickets#index'
  post '/dashboard', to: 'tickets#create'
  patch '/dashboard', to: 'tickets#update'
  # destroy '/dashboard', to: 'tickets#destroy'
  get '/projects', to: 'projects#index'
  get '/projects/:id', to: 'projects#show'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
