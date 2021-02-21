class Avatar < ApplicationRecord
    belongs_to :user
    belongs_to :character
    belongs_to :face, optional: true
    has_many :sayings

        
    def my_sayings
        list = []
        self.sayings.each{|x| list << {id: x.id, phrase: x.phrase}}
        list
    end

    def image
        self.character.imageUrl
    end

    def initialPic
       self.face ? self.face.initial : ''
    end

    def title
        self.character.title
    end    
end
