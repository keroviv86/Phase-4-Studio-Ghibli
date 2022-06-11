class FilmsController < ApplicationController
    def index
        render json: Film.all, status: :ok
    end

    def show
        film = Film.find_by(id: params[:id])
        render json: film, status: :ok
    end

end
   