import { fetchPeople } from './data.js'
import { displayPeople } from './ui.js'

function init() {
    fetchPeople(users => {
        displayPeople(users)
    })
}

export { init }