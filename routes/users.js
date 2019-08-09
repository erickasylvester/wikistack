const express = require("express");
const router = express.Router();
const models = require("../models");
const Page = models.Page;
const User = models.User;
const { userList, userPages } = require("../views");
const notfound = require("../views/notfound");


// /users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users));
  } catch (error) { next(error) }
});

// /users/(dynamicvalue)

router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const pages = await Page.findAll({
      where: {
        authorId: req.params.userId
      }
    });

    res.send(userPages(user, pages));
  } catch (error) { next(error) }
});

router.use((req,res)=> {
   res.status(404).send(notfound());
})


module.exports = router;
