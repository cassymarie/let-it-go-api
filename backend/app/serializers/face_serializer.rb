class FaceSerializer
    include FastJsonapi::ObjectSerializer
    has_many :expressions
    has_many :avatars
    attributes :id, :name, :initial
end