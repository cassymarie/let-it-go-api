'use strict'

const characters = document.querySelector('#container-charcters')
const items = document.querySelector('#container-items')
const saying = document.querySelector('#sayings-here')
const my_char = document.querySelector('#selected-charcter')

saying.innerHTML = "My Character's saying will go HERE"
my_char.innerHTML = 'My Selected Avatar goes HERE'

// Document Load
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    getItems()
})