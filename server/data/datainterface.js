let express = require("express");
let router = express.Router();
let db = require("../server/data/data");

router.get("/list", (req, res) => {
  let id = db
    .getOrgans(id)
    .then(organs => {
      res.json(organs);
    })
    .catch(err => {
      res.status(404).send("error", err.message);
    });
});

router.get("./list/:id");
const id = rep.params.id;
const organs = req.body;
organs.description = req.body.description.then(organ => {
  res.json(organ);
});
module.exports = router;
