class AvatarSerializer
  include FastJsonapi::ObjectSerializer
  has_many :sayings
  attributes :id, :name, :knockout_phrase, :face_id, :character_id, :my_sayings, :image, :title, :initialPic

end
