class FaceSerializer
    include FastJsonapi::ObjectSerializer
    has_many :expressions
    has_many :avatars
    has_many :characters 
    
    attributes :id, :name, :initial
end