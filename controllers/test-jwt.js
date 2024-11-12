const express = require(`express`);
const router = express.Router();

router.get(`/sign-token`, (req, res) => {
  const testUser = { _id: 1, undername: `test`, password: `test` };
});

module.exports = router;
