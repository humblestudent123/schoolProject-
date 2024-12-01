const url = "http://localhost:3000/api/clients"

const user = {
    name: "Никита",
    surname: "Поняев",
    lastname: "Иванович",
    contacts: []
}



function postData(user) {
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((response) => { return response.json() })
        .then((body) => console.log(body))
}

postData(user)