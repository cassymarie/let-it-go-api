class ExpressionSerializer
    include FastJsonapi::ObjectSerializer
    belongs_to :face
    attributes :id, :title, :imageUrl, :category, :face_id
end
