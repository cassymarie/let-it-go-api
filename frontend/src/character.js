const base_url = 'http://localhost:3000/'

class Avatar{
    static all = [];

    constructor({id, name, title, imageUrl, knockout_phrase, my_sayings}){
        this.id = id
        this.name = name
        this.title = title
        this.imageUrl = imageUrl
        this.knockout_phrase = knockout_phrase
        this.damage = 0
        this.my_sayings = my_sayings
        Avatar.all.push(this)
        this.element = document.createElement('div')
    }

    renderSelection(){
        
        this.element.innerHTML = `${this.name}`
        this.element.id = this.id
        this.element.addEventListener('click', selectAvatar)
        return this.element
    }

    attachToSelectionList(){
        characters.appendChild(this.renderSelection())
    }
}

function getCharacters(){
    fetch(`${base_url}characters`)
    .then(resp => resp.json())
    .then(json => {
        json.data.forEach(character => {
            const avatar = new Avatar(character.attributes)
            avatar.attachToSelectionList()
        })
    })
}


function showCharacter(id){
    
    fetch(`${base_url}characters/${id}`)
    .then(resp => resp.json())
    .then(json => {
        
        console.log(json.data.attributes.name)

        json.included.forEach(saying => {
            console.log(`${saying.attributes.phrase}`)
        })
    })
}

function selectAvatar(e){
    // debugger
    let avatarId = parseInt(e.target.id)
    my_avatar.innerHTML = e.target.innerHTML
    showCharacter(avatarId)
}
