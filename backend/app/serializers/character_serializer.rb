class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  has_many :sayings
  attributes :id, :title, :imageUrl, :my_sayings, :face_id
end
