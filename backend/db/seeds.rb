# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#


frankie = Character.create(title: 'sinatra', imageUrl: "sinatra.png")
frankie.sayings << Saying.create(phrase: "flash[:error]='You have no right to be here!'")
frankie.sayings << Saying.create(phrase: "<= nil")
frankie.sayings << Saying.create(phrase: "Hello World") 

ruby = Character.create(title: 'ruby', imageUrl: "ruby.png")
ruby.sayings << Saying.create(phrase: "NameError: undefined local variable or method")
ruby.sayings << Saying.create(phrase: "SyntaxError: unexpected keyword_end, expecting ‘}’")
ruby.sayings << Saying.create(phrase: "ArgumentError: wrong number of arguments (given 1, expected 0)")
ruby.sayings << Saying.create(phrase: "FatalError: unexpected everything")

java = Character.create(title: 'javascript', imageUrl: "javascript.png")
java.sayings << Saying.create(phrase: "Uncaught TypeError: Cannot read property")
java.sayings << Saying.create(phrase: "(unknown): Script error")
java.sayings << Saying.create(phrase: "undefined") 
java.sayings << Saying.create(phrase: "ReferenceError: event is not defined") 

baby = Character.create(title: 'baby', imageUrl: "baby.png")
baby.sayings << Saying.create(phrase: "Waaaaaaaa Waaaaaaaa") 

monster = Character.create(title: 'monster', imageUrl: "monster.png")
monster.sayings << Saying.create(phrase: "I need a cookie")
monster.sayings << Saying.create(phrase: "AAARRRRHHHHGGGGHHH!!!!!")
monster.sayings << Saying.create(phrase: "I'm gonna hide under your bed tonight!") 

nancy = Character.create(title: 'know-it-all', imageUrl: "know_it_all.png")
nancy.sayings << Saying.create(phrase: "Do you have a permit for that?")
nancy.sayings << Saying.create(phrase: "I'm filming you, this is illegal!")
nancy.sayings << Saying.create(phrase: "I'm calling the manager!")
nancy.sayings << Saying.create(phrase: "Let me see your id!")

ronald = Character.create(title: 'politician', imageUrl: "politician.png")
ronald.sayings << Saying.create(phrase: "There is nobody better than me!")
ronald.sayings << Saying.create(phrase: "I'm the smartest person EVER!")
ronald.sayings << Saying.create(phrase: "You're a Loser!")

face1 = Face.create(name: "That Person", initial: 'smile')
face2 = Face.create(name: "Big Eyed Bubba", initial: 'big_smile')
face3 = Face.create(name: "Tweety", initial: 'smirk')
face4 = Face.create(name: "Lil Fella", initial: 'smile')


list = [
        {   :angry => ['angry','bummed','mad','sad','upset','very_angry'],
            :cry => ['quiver_1','quiver_2','tears_1','tears_2','cry_1','cry_2'],
            :happy => ['laugh_big','laugh', 'smile','smile_big','smug','surprised'],
            :nervous => ['confused','nervous','shocked','worried'],
            :stunned => ['confused','dummy','scream_crazy','scream','winse'],
            :taunt => ['sneaky','tongue']},
        {
            :angry => ['angry','devilish','mad','sad'],
            :cry => ['quiver_1','quiver_2','tears_1','tears_2','cry_1','cry_2'],
            :happy => ['happy', 'smirk','big_smile','smolder'],
            :nervous => ['depressed','nervous','sad'],
            :stunned => ['confused','shocked','stunned'],
            :taunt => ['duck','laugh','wink']},
        {
            :angry => ['angry','devil','pissed','rage', 'vampire'],
            :cry => ['quiver_1','quiver_2','tears_1','tears_2','cry_1','cry_2'],
            :happy => ['happy','really_happy','smirk'],
            :nervous => ['confused','huh','sad','stinky'],
            :stunned => ['drunk','scream','surprised','tired'],
            :taunt => ['silly','snicker','wink','tongue']},
        {
            :angry => ['angry','displeased','mad','scared', 'upset','vampire'],
            :cry => ['quiver_1','quiver_2','tears_1','tears_2','cry_1','cry_2'],
            :happy => ['happy', 'cheese','smirk'],
            :nervous => ['curious','nervous','scared','sick'],
            :stunned => ['dead','drunk','dizzy','sad','scream','shocked'],
            :taunt => ['silly','smirk','wink']}
    ]

list.each_with_index do |face, i|
    face.keys.each do |k| 
        face[k].each do |expression|
            Expression.create(title: expression, imageUrl: '#{expression}.png', face_id:(i+1), category: k )
        end
    end
end


Item.create(name: 'pie', damage: 6, base_imageUrl: "pie_base.png", throw_imageUrl: "pie_throw.png", splat_imageUrl: "pie_splat.png")
Item.create(name: 'sandals', count: 3, damage: 4, base_imageUrl: "sandal_base.png", throw_imageUrl: "sandal_throw.png", splat_imageUrl: "sandal_splat.png")
Item.create(name: 'tomato', damage: 3, base_imageUrl: "tomato_base.png", throw_imageUrl: "tomato_throw.png", splat_imageUrl: "tomato_splat.png")
Item.create(name: 'bottle', damage: 5, base_imageUrl: "bottle_base.png", throw_imageUrl: "bottle_throw.png", splat_imageUrl: "bottle_explode.png")
Item.create(name: 'bomb', damage: 8, base_imageUrl: "bomb_base.png", throw_imageUrl: "bomb_throw.png", splat_imageUrl: "bomb_explosion.png")
Item.create(name: 'egg', count: 4, damage: 6, base_imageUrl: "egg_base.png", throw_imageUrl: "egg_throw.png", splat_imageUrl: "egg_splat.png")
Item.create(name: 'waterballoon', count: 3, damage: 6, base_imageUrl: "waterballoon_base.png", throw_imageUrl: "waterballoon_throw.png", splat_imageUrl: "waterballoon_splat.png")


User.create(username: "cassy")
User.create(username: "steve")
