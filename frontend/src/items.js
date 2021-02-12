'use strict'

function getItems(){
    fetch(`${base_url}items`)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(item => {
            let addItem = document.createElement('div')
            addItem.innerHTML = `${item.name}`
            items.appendChild(addItem)
        })
    })
}