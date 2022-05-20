class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

    def show
        review = find_comment
        render json: review, status: :ok
    end

    def create
        review = Review.create!(join_params)
        render json: review, status: :created
    end

    def destroy
        comment = Review.find(params[:id])
        comment.destroy
        head :no_content
    end

    def update
        rating = Review.find(params[:id])
        rating.update!(rating_param)
        render json: rating, status: :ok
    end
    
    def showForFilm
        film = Film.find(params[:id])
        reviews = film.reviews
        render json: reviews, status: :ok
    end

    private
    def find_comment 
        id = Review.find_by(id: params[:id])
    end
    def join_params
        params.permit(:user_id, :film_id, :comment, :rating)
    end

    def rating_param
        params.permit(:rating)
    end
end
