class Expression < ApplicationRecord
    belongs_to :face
    validates :category, inclusion: {in: %w(angry cry happy nervous stunned taunt), message: '%{value} is not a valid category' }
end
