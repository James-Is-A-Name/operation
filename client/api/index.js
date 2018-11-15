import request from "superagent";

export function getOrgans() {
  return request.get('/api/list')
    .then(res => {
      let organs = res.body
      return organs
    })
    .catch(() => {
      throw Error('This needs to be the organs route')
    })
}

export function getOrganId(id) {
  return request.get(`/api/organ/${id}`)
    .then(res => {
      let returnedId = res.body
      return returnedId
    })
    .catch(() => {
      throw Error('This needs to be the organs id route')
    })
}