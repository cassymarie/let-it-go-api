class Face < ApplicationRecord
    has_many :expressions
    has_many :avatars
    has_many :characters
end
