let express = require("express");
let router = express.Router();
let db = require("../server/data/datainterface");

router.get("/list", (req, res) => {
  res.json(db.getOrgans());
});

router.get("/organ/:id", (req, res) => {
  const id = req.params.id;
  res.json(db.getOrganId(id));
});

module.exports = router;
