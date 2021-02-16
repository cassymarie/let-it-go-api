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

    renderEdit(){
        debugger
        
        edit_name.value = this.name
        
        this.my_sayings.forEach(saying => {
            const ele = document.createElement('div')
            ele.id = `${saying.id}`
            ele.addEventListener('click',handleSayingClick)
            ele.innerHTML = `
                <button class="edit-btn">...</button>
                <p>${saying.phrase}</p>
                <button class="delete-btn">X</button>
            `
            edit_sayings.appendChild(ele)
        })



    }

    attachToSelectionList(){
        characters.appendChild(this.renderSelection())
    }
}

function handleSayingClick(){
    console.log('clicked')
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

       let charId = parseInt(json.data.id)

        // console.log(json.data.attributes.name)

        // json.included.forEach(saying => {
        //     console.log(`${saying.attributes.phrase}`)
        // })

        selectedAvatar = Avatar.all.find(x => x.id === charId)
        selectedAvatar.renderEdit()
        // debugger
    })
}

function selectAvatar(e){
    // debugger
    let avatarId = parseInt(e.target.id)
    my_avatar.innerHTML = e.target.innerHTML
    showCharacter(avatarId)
}
