'use strict'

const characters = document.querySelector('#container-charcters')
const items = document.querySelector('#container-items')
const battleground = document.querySelector('.battle-ground')
const saying = document.querySelector('#sayings-here')
const my_avatar = document.querySelector('#selected-charcter')
const edit_info = document.querySelector('#edit-info')
const edit_sayings = document.querySelector('#edit-sayings')
const add_saying = document.querySelector('#add-saying')
const edit_name = document.querySelector('#edit-name')
const btn_edit_avatar = document.querySelector('#edit-avatar')
let selectedAvatar = ''

// Document Load
document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    getItems()
    battleground.style.display = 'none'
})

btn_edit_avatar.addEventListener('click', editMyAvatar)

// show edit section / hide item selection
function editMyAvatar(e){
    items.parentElement.style.display = 'none' 
    edit_info.parentElement.style.display = 'block' 
    e.target.style.display = 'none'
    // document.querySelector('#submit-character').addEventListener('click',updateCharacter)
}

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

// // enable tooltips 
// let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// })