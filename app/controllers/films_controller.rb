class FilmsController < ApplicationController
    require 'rest-client'
    def index
        url="https://ghibliapi.herokuapp.com/films"
        response =RestClient.get(url)
        render json: response, status: :ok
    end
    def show
        url="https://ghibliapi.herokuapp.com/films/#{params[:id]}"
        response =RestClient.get(url)
        render json: response, status: :ok
    end

    def update
        url="https://ghibliapi.herokuapp.com/films/#{params[:id]}"
        response =RestClient.get(url)
        response.update!(film_params)
        render json: response, status: :ok
    end

    private 

    def film_params
        params.permit(:rt_score)
    end

    

  
  
end
