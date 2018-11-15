let express = require("express");
let router = express.Router();
let db = require("../server/data/datainterface");




router.get("/list", (req, res) => {
  db
    .getOrgans()
    .then(organs => {
      res.json(organs);
    })
    .catch(err => {
      res.status(404).send("error", err.message);
    });
});

router.get("./list/:id", (req,res)=>{
  const id = rep.params.id;
  const organs = req.body;
  organs.description = req.body.description.then(organ => {
    res.json(organ);
  });
});


module.exports = router;
