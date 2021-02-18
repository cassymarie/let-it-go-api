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
const add_saying = document.querySelector('#add-saying')
const edit_name = document.querySelector('#edit-name')
const btn_edit_avatar = document.querySelector('#edit-avatar')
let selectedAvatar = ''

// Document Load
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    getItems()
})

btn_edit_avatar.addEventListener('click', showEditAvatar)



function randomNumber(max){
    return Math.floor(Math.random() * max)
}
