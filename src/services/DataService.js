const baseURL = 'http://localhost:8080/pirates/'

export default {
  getPirates() {
    return fetch(baseURL)
      .then(res => res.json())
  },
  addPirates(pirate) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(pirate),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  },
  updatePirate(pirate) {
    // return fetch(baseURL + pirate._id, {
    return fetch(baseURL + pirate.id, {
      method: 'PUT',
      body: JSON.stringify(pirate),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },
  deletePirate(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}