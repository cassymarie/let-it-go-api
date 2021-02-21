class FacesController < ApplicationController
    def index
        faces = Face.all
        render json: FaceSerializer.new(faces, {include: [:expressions]})
    end
end