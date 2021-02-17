# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#


karol = Character.create(name: 'Karol', title: 'manager-female', knockout_phrase: "I'm calling the manager!", imageUrl: "karen.png")
karol.sayings << Saying.create(phrase: "Do you have a permit for that?")
karol.sayings << Saying.create(phrase: "I'm filming you, this is illegal!")
karol.sayings << Saying.create(phrase: "Let me see your id!")

ronald = Character.create(name: 'Ronald', title: 'politician', knockout_phrase: "See I win! You are a Loser!", imageUrl: "politician.png")

ronald.sayings << Saying.create(phrase: "There is nobody better than me!")
ronald.sayings << Saying.create(phrase: "I'm the smartest person EVER!")
ronald.sayings << Saying.create(phrase: "You're a Loser!")


ruby = Character.create(name: 'Ruby', title: 'ruby', knockout_phrase: "FatalError: unexpected everything", imageUrl: "ruby.png")
ruby.sayings << Saying.create(phrase: "NameError: undefined local variable or method")
ruby.sayings << Saying.create(phrase: "SyntaxError: unexpected keyword_end, expecting ‘}’")
ruby.sayings << Saying.create(phrase: "ArgumentError: wrong number of arguments (given 1, expected 0)")

java = Character.create(name: 'Coffee', title: 'javascript', knockout_phrase: "undefined", imageUrl: "javascript.png")
java.sayings << Saying.create(phrase: "Uncaught TypeError: Cannot read property")
java.sayings << Saying.create(phrase: "(unknown): Script error")
java.sayings << Saying.create(phrase: "ReferenceError: event is not defined") 

baby = Character.create(name: 'Baby', title: 'baby', knockout_phrase: "Waaaaaaaa Waaaaaaaa", imageUrl: "baby.png")

frankie = Character.create(name: 'Sinatra', title: 'sinatra', knockout_phrase: "", imageUrl: "sinatra.png")
frankie.sayings << Saying.create(phrase: "flash[:error]='You have no right to be here!'")
frankie.sayings << Saying.create(phrase: "<= nil")
frankie.sayings << Saying.create(phrase: "Hello World") 

monster = Character.create(name: 'Monster', title: 'monster', knockout_phrase: "Get in my Belly!", imageUrl: "monster.png")
monster.sayings << Saying.create(phrase: "I need a cookie")
monster.sayings << Saying.create(phrase: "AAARRRRHHHHGGGGHHH!!!!!")
monster.sayings << Saying.create(phrase: "I'm gonna hide under your bed tonight!") 


Item.create(name: 'pie', damage: 5)
Item.create(name: 'keybord', damage: 2)
Item.create(name: 'shoe', damage: 3)
Item.create(name: 'tomatoe', damage: 3)
Item.create(name: 'bottle', damage: 5)

Expression.create(description: 'happy')
Expression.create(description: 'scared')
Expression.create(description: 'sad')
Expression.create(description: 'taunt')
Expression.create(description: 'winse')
Expression.create(description: 'cry')
Expression.create(description: 'surprised')
