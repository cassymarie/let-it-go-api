class UsersController < ApplicationController

    def create 
        user = User.find_by(username: params[:username].downcase)

        if user
            session[:user_id] = user.id
            render json: UserSerializer.new(user, {include: [:avatars]})
        else
            if user.nil?
                user = User.create(username: params[:username].downcase)
                session[:user_id] = user.id
                render json: UserSerializer.new(user, {include: [:avatars]})
            else
                render json: {message: "Could not Signin User"} 
            end
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: UserSerializer.new(user, {include: [:avatars]})
    end

    
    private
    def user_params
        params.require(:user).permit(:id, :username)
    end

end
