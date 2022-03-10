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
        comment = UserJoinFilm.find(params[:id])
        comment.destroy
        head :no_content
    end

    def update
        rating = UserJoinFilm.find(params[:id])
        rating.update!(rating_param)
        render json: rating, status: :ok
    end
    
    private
    def find_comment 
        id = UserJoinFilm.find_by(id: params[:id])
    end
    def join_params
        params.permit(:user_id, :film_id, :comment, :rating)
    end

    def rating_param
        params.permit(:rating)
    end
end
