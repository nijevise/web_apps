import People from './models.js'

function fetchPeople(onSucess) {
    $.get('https://randomuser.me/api?results=15', (response) => {
        console.log(response)
        let users = response.results.map((person) => {
            return new People(person.name.first, person.name.last, person.gender, person.dob.date, person.email, person.picture.thumbnail, person.id.value)
        })
        console.log(users)
        onSucess(users)
    })
}

export {
    fetchPeople
}
