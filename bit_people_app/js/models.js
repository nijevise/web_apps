class People {
    constructor(firstName, lastName, gender, dateOfBirth, email, picture, id) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.dateOfBirth = new Date(dateOfBirth).toDateString()
        this.email = email
        this.picture = picture
        this.id = id
    }
}

export default People