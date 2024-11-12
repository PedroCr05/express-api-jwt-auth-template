const express = require(`express`);
const router = express.Router();
const jwt = require(`jsonwebtoken`);

router.get(`/sign-token`, (req, res) => {
  const testUser = { _id: 1, undername: `test`, password: `test` };
});

const token = jwt.sign({ testUser }, process.env.JWT_SECRET);

res.json({ token });

module.exports = router;
