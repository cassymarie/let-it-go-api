const base_url = 'http://localhost:3000/'


function getCharacters(){
    fetch(`${base_url}characters`)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(char => {
            let addChar = document.createElement('div')
            addChar.innerHTML = `${char.name}`
            characters.appendChild(addChar)
        })
    })
}

  // Document Load
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
})