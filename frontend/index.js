'use strict'

const characters = document.querySelector('#container-charcters')
const items = document.querySelector('#container-items')
const saying = document.querySelector('#sayings-here')
const my_avatar = document.querySelector('#selected-charcter')
const edit_info = document.querySelector('#edit-info')
const edit_sayings = document.querySelector('#edit-sayings')
const edit_name = document.querySelector('#edit-name')
const btn_edit_avatar = document.querySelector('#edit-avatar')

let selectedAvatar = ''

saying.innerHTML = "My Character's saying will go HERE"
my_avatar.innerHTML = 'My Selected Avatar goes HERE'

// Document Load
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    getItems()
})

btn_edit_avatar.addEventListener('click', editMyAvatar)

function editMyAvatar(e){
    items.parentElement.style.display = 'none' 
    edit_info.parentElement.style.display = 'block' 
    e.target.style.display = 'none'
}