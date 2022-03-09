class UserJoinFilmsController < ApplicationController
    def index
        render json: UserJoinFilm.all, status: :ok
    end

    def show
        review = find_comment
        render json: review, status: :ok
    end

    def create
        review = UserJoinFilm.create!(join_params)
        render json: render, status: :created
    end

    def destroy
        comment = UserJoinFilm.destroy(find_comment)
    end
    
    private
    def find_comment 
        id = UserJoinFilm.find_by(id: params[:id])
    end
    def join_params
        params.permit(:user_id, :film_id, :comment, :rating)
    end
end
