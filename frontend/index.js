'use strict'
const startup = document.querySelector('.startup')
const characters = document.querySelector('#container-charcters')
const items = document.querySelector('#container-items')
const battleground = document.querySelector('.battle-ground')
const saying = document.querySelector('#sayings-here')
const my_avatar = document.querySelector('#selected-charcter')
const edit_info = document.querySelector('#edit-info')
const edit_character = document.querySelector('#edit-character')
const edit_sayings = document.querySelector('#edit-sayings')
const speech_bubble = document.querySelector('#add-saying')
const add_saying = document.querySelector('#add-saying')
const edit_name = document.querySelector('#edit-name')
const btn_edit_avatar = document.querySelector('#edit-avatar')
const change_character = document.querySelector('#change-avatar')
const thrown_item = document.querySelector('#splat')
const face = document.querySelector('#expressions')
const testing = document.querySelector('.testing')

let selectedAvatar = ''
let selectedItem = ''

// testing.addEventListener('click',headshaking)

// Document Load
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    getItems()
    getExpressions()
})

btn_edit_avatar.addEventListener('click', showEditAvatar)
change_character.addEventListener('click', changeCharacter)

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

