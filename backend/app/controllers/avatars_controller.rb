class AvatarsController < ApplicationController
    def index
        avatars = Avatar.where(user_id: @current_user.id)
        render json: AvatarSerializer.new(avatars)
    end
    def show
        avatars = Avatar.find(params[:id])
        render json: AvatarSerializer.new(avatars, {include: [:sayings]})
    end
    def update
        avatars = Avatar.find(params[:id])
        avatars.update(avatar_params)
        render json: avatars.to_json(
            except: [:created_at, :updated_at, :imageUrl, :title])
    end

    private
    def avatar_params
        params.require(:myAvatar).permit(:id, :name, :knockout_phrase)
    end
    
end
