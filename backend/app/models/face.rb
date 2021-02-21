class Face < ApplicationRecord
    has_many :expressions
    has_many :avatars
end
