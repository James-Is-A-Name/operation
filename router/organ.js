let express = require("express");
let router = express.Router();
let db = require("../server/data/data");

router.get("/list", (req, res) => {
  let id = db.getOrganId(id);
});

router.get("./list/:id");

module.exports = router;
