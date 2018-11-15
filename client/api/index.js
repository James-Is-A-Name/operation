import request from "superagent";

export function getOrgans() {
  return request.get('/v1/list')
  .then(res => {
    let organs = res.body
    return organs
  })
  .catch(() => {
    throw Error('This needs to be the organs route')

  })
}

export function getOrganById (organId) {
  return request.get(`/v1/list/${organId}`)
  .then(res => {
    let returnedId = res.body
    return returnedId
  })
  .catch(() => {
    throw Error('This needs to be the organsid route')

  })
}



