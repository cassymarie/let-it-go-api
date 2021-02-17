class SayingsController < ApplicationController
    def index
        sayings = Saying.where(character_id: params[:character_id])
        render json: sayings.to_json(
            except: [:created_at, :updated_at],
            include: {character: {only: [:name, :title, :knockout_phrase]}}
        )
    end

    def show
        saying = Saying.find_by(id: params[:id])
        render json: saying.to_json(
            except: [:created_at, :updated_at],
            include: {character: {only: [:name, :title, :knockout_phrase]}}
        )
    end

    def update
        saying = Saying.find_by(id: params[:id])
        saying.update(sayings_params)
        render json: saying.to_json(
            except: [:created_at, :updated_at],
            include: {character: {only: [:name, :title, :knockout_phrase]}}
        )
    end

    def delete
        binding.pry
        saying = Saying.find_by(id: params[:id]) 
        saying.destroy
        redirect_to :index
    end
    
    private
    def sayings_params
        params.require(:saying).permit(:id, :phrase)
    end
end