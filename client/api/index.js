import request from "superagent";

// Gets list of all organs

export function getOrgans() {
  return request.get('/api/list')
    .then(res => {
      let organs = res.body
      return organs
    })
    .catch(() => {
      throw Error('This needs to be the organs api route')
    })
}

// Gets list of organs by their ID

export function getOrganId(id) {
  return request.get(`/api/organ/${id}`)
    .then(res => {
      let returnedId = res.body
      return returnedId
    })
    .catch(() => {
      throw Error('This needs to be the organs api id route')
    })
}