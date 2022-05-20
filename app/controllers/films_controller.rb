class FilmsController < ApplicationController
    def index
        render json: Film.all, status: :ok
    end

    def show
        film = Film.find_by(id: params[:id])
        render json: film, status: :ok
    end

end
   # require 'rest-client'
    # def index
    #     url="https://ghibliapi.herokuapp.com/films"
    #     response =RestClient.get(url)
    #     render json: response, status: :ok
    # end
    # def show
    #     url="https://ghibliapi.herokuapp.com/films/#{params[:id]}"
    #     response =RestClient.get(url)
    #     render json: response, status: :ok
    # end
