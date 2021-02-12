class ItemsController < ApplicationController
    def index
        render json: "Items: Index Route"
    end
    def show
        render json: "Items: Show Route"
    end
end