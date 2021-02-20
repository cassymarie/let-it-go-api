class AvatarSerializer
  include FastJsonapi::ObjectSerializer
  has_many :sayings
  belongs_to :character
  belongs_to :user
  attributes :id, :name, :knockout_phrase, :face_id

end
