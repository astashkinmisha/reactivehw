let url = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = () => {
    return fetch(url)
        .then(value => value.json())
}

export const getUser = (id) => {
    return fetch(url + '/' + id)
        .then(value => value.json())
}


