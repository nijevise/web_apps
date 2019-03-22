
function displayPeople(users) {
    let output = document.getElementById('output')
    users.forEach(user => {
        let userDiv = document.createElement('div')
        userDiv.className = 'userDiv'
        let userImg = document.createElement('img')
        userImg.src = user.picture
        let userName = document.createElement('p')
        userName.classList = 'userName'
        userName.innerHTML = `${user.firstName} ${user.lastName}`
        let userEmail = document.createElement('p')
        userEmail.classList = 'userEmail'
        userEmail.innerHTML = `<i class="fa fa-envelope"></i> email: ${user.email}`
        let userDateOfBirth = document.createElement('p')
        userDateOfBirth.innerHTML = ` <i class="fa fa-birthday-cake"></i> ${user.dateOfBirth}`
        userDateOfBirth.classList = 'userDateOfBirth'
        console.log(user.dateOfBirth)
        let textDiv = document.createElement('div')
        textDiv.appendChild(userName)
        textDiv.appendChild(userEmail)
        textDiv.appendChild(userDateOfBirth)
        userDiv.appendChild(userImg)
        userDiv.appendChild(textDiv)
        output.appendChild(userDiv)
        if (user.gender === 'female') {
            userDiv.style.backgroundColor = 'pink'
        }
    });
}

export { displayPeople }