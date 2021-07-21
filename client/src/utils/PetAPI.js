import axios from 'axios'
const localStorage = window.localStorage

const Pet = {
  // get User favorites
  favorites: _ => axios.get('/api/pets/my', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  // add Pet to favorites
  add: pet => axios.post('/api/users/login', pet, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),

  // update info on Pet in favorites
  update: (_id, pet) => axios.put(`/api/pets/${_id}`, pet, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),

  // delete Pet from favorites
  delete: _id => axios.delete(`/api/pets/${_id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default Pet
