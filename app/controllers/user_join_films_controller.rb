class UserJoinFilmsController < ApplicationController
    def index
        render json: UserJoinFilm.all, status: :ok
    end
end
