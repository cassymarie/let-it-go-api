class SayingsController < ApplicationController
    def index
        sayings = Saying.where(character_id: params[:character_id])
        render json: sayings.to_json(
            except: [:created_at, :updated_at],
            include: {character: {only: [:name, :title, :knockout_phrase]}}
        )
    end

    def create
        saying = Saying.new(sayings_params)

        if saying.save
            render json: saying.to_json(
                except: [:created_at, :updated_at, :character_id])
        else
            render json: 'Can not create new Saying at this time.'
        end
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

    def destroy
        saying = Saying.find_by(id: params[:id]) 
        saying.destroy
        sayings = Saying.where(character_id: params[:character_id])
        render json: sayings.to_json(
            except: [:created_at, :updated_at, :character_id])
    end
    
    private
    def sayings_params
        params.require(:saying).permit(:id, :phrase, :avatar_id)
    end
end