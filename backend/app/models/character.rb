class Character < ApplicationRecord
    has_many :sayings
    belongs_to :face
    
    def my_sayings
        list = []
        self.sayings.each{|x| list << {id: x.id, phrase: x.phrase}}
        list
    end
end
