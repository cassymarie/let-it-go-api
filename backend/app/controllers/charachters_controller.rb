class CharactersController < ApplicationController
    def index
        render json: "Character: Index Route"
    end
    def show
        render json: "Character: Show Route"
    end
end