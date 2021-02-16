class CharactersController < ApplicationController
    def index
        characters = Character.all
        render json: CharacterSerializer.new(characters)
    end
    def show
        character = Character.find(params[:id])
        render json: CharacterSerializer.new(character, {include: [:sayings]})
    end
end