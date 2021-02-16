class SayingsController < ApplicationController
    def index
        sayings = Saying.where(character_id: params[:character_id])
        render json: sayings.to_json(
            except: [:created_at, :updated_at],
            include: {character: {only: [:name, :title, :knockout_phrase]}}
        )
    end

    def show

    end
    def update
    end
end