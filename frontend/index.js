'use strict'

const pageBody = document.querySelector('#page-body')
const signin = document.querySelector('#signin_form')
const navBar = document.querySelector('.nav-bar')
const btn_signin = document.querySelector('#btn-signin')
const startup = document.querySelector('.startup')
const avatarConfig = document.querySelector('.avatar-config')
const usersAvatars = document.querySelector('.users-avatars')
const characters = document.querySelector('.avatars-list')
const avatarDirections = document.querySelector('.directions-select')
const avatarProfile = document.querySelector('.avatar-profile')
const avatarSayings = document.querySelector('.avatar-sayings')
const polaroid = document.querySelector('.polaroid')
const polaroid_name = document.querySelector('.name-title')
const polaroid_image = document.querySelector('.polaroid-avatar')
const polaroid_expression = document.querySelector('.polaroid-expression')
const polaroid_saying = document.querySelector('.polaroid-knockout')
const btn_selectAvatar = document.querySelector('#select-avatar')
const items = document.querySelector('#items-list')
const battleground = document.querySelector('.battle-ground')
const saying = document.querySelector('#sayings-here')
const avatar = document.querySelector('#avatar')
const avatarFace = document.querySelector('#face')

const edit_sayings = document.querySelector('#edit-sayings')
const add_saying = document.querySelector('#add-saying')
const change_character = document.querySelector('#change-avatar')

const speechBubble = document.querySelector('#speech-bubble')
const throwedItem = document.querySelector('#throw')
const itemSplat = document.querySelector('#splat')
const face = document.querySelector('#expressions')
const testing = document.querySelector('.testing')

let hoverAvatar = ''
let viewingAvatar = ''
let selectedAvatar = ''
let selectedItem = ''
let currUser = ''

// testing.addEventListener('click',headshaking)

// Document Load
document.addEventListener("DOMContentLoaded", () => {
    // getAvatars()
    // getItems()
    getExpressions()
})

btn_signin.addEventListener('click', handleSigninClick)
btn_selectAvatar.addEventListener('click', chooseAvatar)
usersAvatars.addEventListener('mouseover', hideDirections)

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

function hideDirections(){
    avatarDirections.style.display = 'none'
    avatarProfile.style.display = 'flex'
}

function showDirections(){
    avatarDirections.style.display = 'block'
    avatarProfile.style.display = 'none'
}