class FilmsController < ApplicationController
    require 'rest-client'
    def index
        url="https://ghibliapi.herokuapp.com/films"
        response =RestClient.get(url)
        render json: response, status: :ok
    end
end
