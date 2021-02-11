class CharachtersController < ApplicationController
    def index
        render json: "Charachter: Index Route"
    end
    def show
        render json: "Charachter: Show Route"
    end
end