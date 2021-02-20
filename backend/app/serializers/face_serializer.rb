class FaceSerializer
    include FastJsonapi::ObjectSerializer
    has_many :expressions
    attributes :id, :name, :initial
end