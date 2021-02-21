'use strict'

const pageBody = document.querySelector('#page-body')
const signin = document.querySelector('#signin_form')
const navBar = document.querySelector('.nav-bar')
const btn_signin = document.querySelector('#btn-signin')
const startup = document.querySelector('.startup')
const avatarConfig = document.querySelector('.avatar-config')
const usersAvatars = document.querySelector('.users-avatars')
const characters = document.querySelector('.avatars-list')
const polaroid = document.querySelector('.polaroid')
const polaroid_name = document.querySelector('.name-title')
const polaroid_image = document.querySelector('.polaroid-avatar')
const polaroid_saying = document.querySelector('.polaroid-knockout')
const edit_avatar = document.querySelector('#edit-avatar')

const items = document.querySelector('#container-items')
const battleground = document.querySelector('.battle-ground')
const saying = document.querySelector('#sayings-here')
const my_avatar = document.querySelector('#selected-charcter')
const edit_info = document.querySelector('#edit-info')
const edit_sayings = document.querySelector('#edit-sayings')
const add_saying = document.querySelector('#add-saying')
const change_character = document.querySelector('#change-avatar')

const thrown_item = document.querySelector('#splat')
const face = document.querySelector('#expressions')
const testing = document.querySelector('.testing')

let viewingAvatar = ''
let selectedAvatar = ''
let selectedItem = ''
let currUser = ''

// testing.addEventListener('click',headshaking)

// Document Load
document.addEventListener("DOMContentLoaded", () => {
    // getAvatars()
    // getItems()
    // getExpressions()
})

btn_signin.addEventListener('click', handleSigninClick)

change_character.addEventListener('click', changeCharacter)

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

