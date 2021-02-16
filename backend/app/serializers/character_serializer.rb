class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  has_many :sayings
  attributes :id, :name, :title, :imageUrl, :knockout_phrase, :my_sayings

end
