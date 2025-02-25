const express = require("express")
const Router = express.Router()
const guestController = require("../controllers/guest")

Router.get("/", guestController.getAllGuest)

Router.get("/:slug", guestController.getGuestBySlug)

Router.post("/", guestController.addGuest)

module.exports = Router
