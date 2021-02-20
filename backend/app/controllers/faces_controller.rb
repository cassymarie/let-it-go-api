class FacesController < ApplicationController
    def index
        faces = Face.all
        render json: FaceSerializer.new(faces, {include: [:expressions]})
    end
    # def show
    #     face = Face.find(params[:id])
    #     render json: FaceSerializer.new(face)
    # end
end