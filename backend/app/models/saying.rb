class Saying < ApplicationRecord
    belongs_to :character
    validates :phrase, presence: true
end
