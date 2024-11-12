const express = require(`express`);
const router = express.Router();
const jwt = require(`jsonwebtoken`);

router.get(`/sign-token`, (req, res) => {
  const user = { _id: 1, undername: `test`, password: `test` };

  const token = jwt.sign({ user }, process.env.JWT_SECRET);

  res.json({ token });
});

// router.post(`/verify-token`, (req, res) => {
//   const token = req.headers.authorization;
//   res.json({ token });
// });

// Above is without removing the bear tag and below is using the split method to remove it.
router.post(`/verify-token`, (req, res) => {
  const token = req.headers.authorization.split(``)[1];
  res.json({ token });
});

module.exports = router;
