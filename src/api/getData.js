async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'); 
    if (response.ok) return await response.json()
    else {return null}
  }

async function getPostData(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id); 
    if (response.ok) return await response.json()
    else {return null}
  }

  async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'); 
    if (response.ok) return await response.json()
    else {return null}
  }

async function getUserData(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id); 
    if (response.ok) return await response.json()
    else {return null}
  }

  async function getAlbums() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/'); 
    if (response.ok) return await response.json()
    else {return null}
  }

  async function getAlbumData(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/' + id); 
    if (response.ok) return await response.json()
    else {return null}
  }
  async function getPhotos(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/' + id + '/photos/'); 
    if (response.ok) return await response.json()
    else {return null}
  }
  
  export { getPosts, getPostData, getUsers, getUserData, getAlbums, getAlbumData, getPhotos };