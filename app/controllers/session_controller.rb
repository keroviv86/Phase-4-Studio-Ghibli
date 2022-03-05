class SessionController < ApplicationController
    skip_before_action :authorized_user, only: [:login]

    def create
        user = User.find_by(username:params[:username])
       
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: {error: "Username or Password is inccorect"}
        end 
    end 

    def destroy
        session.destroy :current_user
        head :no_content
    end
end
