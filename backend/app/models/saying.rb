class Saying < ApplicationRecord
    belongs_to :avatar, optional: true
    belongs_to :character, optional: true
    validates :phrase, presence: true
end
