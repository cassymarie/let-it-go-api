# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Character.create(name: 'Karen', title: 'manager-female', knockout_phrase: "I'm calling the manager!")
Character.create(name: 'Chad', title: 'manager-male', knockout_phrase: "You hit hard for a Girl.")
Character.create(name: 'Ruby', title: 'ruby', knockout_phrase: "Ruby not defined error")
Character.create(name: 'Coffee', title: 'javascript', knockout_phrase: "undefined")

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
