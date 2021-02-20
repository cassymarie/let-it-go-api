class UsersController < ApplicationController

    def create 
        user = User.find_by(username: params[:username].downcase)

        if user
            session[:user_id] = @user.id
        else
            if user.nil?
                session[:user_id] = User.create(username: params[:username])
                flash[:alert] = 'Email not found. Sign Up to continue.'
            else
                flash[:alert] = 'Email and/or Password are incorrect.  Please try again.'
            end
        end
    end
    
    private
    def user_params
        params.require(:user).permit(:id, :username)
    end

end
