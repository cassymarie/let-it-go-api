class ExpressionSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :title, :imageUrl, :category
end
