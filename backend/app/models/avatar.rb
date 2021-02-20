class Avatar < ApplicationRecord
    belongs_to :user
    belongs_to :character
    has_many :sayings

        
    def my_sayings
        list = []
        self.sayings.each{|x| list << {id: x.id, phrase: x.phrase}}
        list
    end

    def image
        self.character.imageUrl
    end

    def title
        self.character.title
    end    
end
