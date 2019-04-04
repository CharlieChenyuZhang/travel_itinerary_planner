const postUser = (user) => {
  return fetch('/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if (!res.ok) return Promise.reject(res.statusText)
      return Promise.resolve(res.status)
    })
}

const deleteItinerary = (id) => {
  return fetch(`/users/itineraries/${id}`, {
    method: 'DELETE'
  })
    .then((res) => res.json())
}

const patchItinerary = (id, name, events) => {
  return fetch(`/users/itineraries/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ name, events }),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
}

const postItinerary = (itinerary) => {
  return fetch('/users/itineraries', {
    method: 'POST',
    body: JSON.stringify({ itinerary }),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((res) => ({ itinerary: res.itineraries[res.itineraries.length - 1], length: res.itineraries.length - 1, user: res })) // return last itinerary (most recently saved itinerary)
}

const getUser = (user) => {
  return fetch(`/users/${user.username}/${user.password}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

const getAllUsers = () => {
  return fetch(`/users`)
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

const getUsersByName = (queryString) => {
  return fetch(`/users/${queryString}`)
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

const patchUser = (user) => {
  return fetch('/users', {
    method: 'PATCH',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

const deleteUser = (user) => {
  return fetch('/users', {
    method: 'DELETE',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

const tokenLogin = (token) => {
  return fetch(`/users/login/token/${token}`)
    .then((res) => (
      res.json()
        .then((json) => ({ status: res.status, ...json }))
    ))
}

const login = (user) => {
  return fetch(`/users/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => (
      res.json()
        .then((json) => {
          window.localStorage.setItem('token', json.token)
          return { status: res.status, ...json.user }
        })
    ))
}

const logout = () => {
  return fetch('/users/logout')
    .then((res) => {
      window.localStorage.removeItem('token')
      return res.status
    })
}

export { postUser, getUser, tokenLogin, login, logout, patchUser, postItinerary, deleteItinerary, patchItinerary, getAllUsers, getUsersByName, deleteUser }
