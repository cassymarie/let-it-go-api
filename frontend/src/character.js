const base_url = 'http://localhost:3000/'

class Avatar{
    static all = [];

    constructor({id, name, title, imageUrl, knockout_phrase}){
        this.id = id
        this.name = name
        this.title = title
        this.imageUrl = imageUrl
        this.knockout_phrase = knockout_phrase
        this.damage = 0

        Avatar.all.push(this)
        this.element = document.createElement('div')

    }

    renderSelection(){
        this.element.innerHTML = `${this.name}`
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
        json.forEach(character => {
            const avatar = new Avatar(character)
            avatar.attachToSelectionList()
        })
    })
}

function selectAvatar(e){
    my_avatar.innerHTML = e.target.innerHTML
}