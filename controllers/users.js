const express = require(`express`);
const router = express.router();

router.post(`/signup`, (req, res) => {
  res.json({ message: `Signup Route created!` });
});

module.exports = router;
