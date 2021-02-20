class UserSerializer
    include FastJsonapi::ObjectSerializer
    has_many :avatars
    attributes :id, :username
    
  end
  