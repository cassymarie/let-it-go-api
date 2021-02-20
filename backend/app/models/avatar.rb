class Avatar < ApplicationRecord
    belongs_to :user
    belongs_to :character
    has_many :sayings
end
