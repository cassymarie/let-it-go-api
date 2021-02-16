class Character < ApplicationRecord
    has_many :sayings
    
    def my_sayings
        list = []
        self.sayings.each{|x| list << x.phrase}
        list
    end
end
