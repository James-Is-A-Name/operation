import request from "superagent";

export function getOrgans() {
  return request.get('/v1/organs')
  .then(res => {
    let organs = res.body
    return organs
  })
  .catch(() => {
    throw Error('This needs to be the organs route')

  })
}

