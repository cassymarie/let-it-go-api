class User < ApplicationRecord
    has_many :avatars
    has_many :characters, through: :avatars
    accepts_nested_attributes_for :avatars

    validates :username, presence: true, uniqueness: true

    after_create :create_avatars

    def create_avatars
        Character.all.each do |c|
            avatar = Avatar.create(character_id: c.id, name: c.title.capitalize, knockout_phrase: 'You are the Best! I am Sorry for doubting you.', face_id: c.face_id)
            c.sayings.each do |s|
                avatar.sayings << Saying.create(phrase: s.phrase)
            end
            self.avatars << avatar
        end
    end

end
