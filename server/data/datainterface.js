let db = require("./data");

function getOrgans() {
  return db;
}

function getOrganId(id) {
  return db.find(organ => {
    return organ.id == id;
  });
}

module.exports = {
  getOrgans,
  getOrganId
};
