class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    def index
        users = User.all
        render json: users, status: :ok
    end
    def show
        render json: @current_user
      end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end 

 
    private

    def user_params
        params.permit(:username, :password)
    end 
end
