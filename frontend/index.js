'use strict'

const characters = document.querySelector('#container-charcters')
const items = document.querySelector('#container-items')
const saying = document.querySelector('#sayings-here')
const my_avatar = document.querySelector('#selected-charcter')
const edit_sayings = document.querySelector('#edit-sayings')
const edit_name = document.querySelector('#edit-name')

let selectedAvatar = ''

saying.innerHTML = "My Character's saying will go HERE"
my_avatar.innerHTML = 'My Selected Avatar goes HERE'

// Document Load
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    getItems()
})