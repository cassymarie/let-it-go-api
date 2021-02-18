class CharactersController < ApplicationController
    def index
        characters = Character.all
        render json: CharacterSerializer.new(characters)
    end
    def show
        character = Character.find(params[:id])
        render json: CharacterSerializer.new(character, {include: [:sayings]})
    end
    def update
        character = Character.find(params[:id])
        character.update(character_params)
        render json: character.to_json(
            except: [:created_at, :updated_at, :imageUrl, :title])
    end

    private
    def character_params
        params.require(:myAvatar).permit(:id, :name, :knockout_phrase)
    end
end