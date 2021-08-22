let url = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = () => {
    return fetch(url)
        .then(value => value.json())
}

export const getPost = (id) => {
    return fetch(url + '/' + id)
        .then(value => value.json())
}
