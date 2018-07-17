const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Validation
const validateProviderProfileInput = require("../../validation/provider");

//Load Profile Model
const ProviderProfile = require("../../models/ProviderProfile");
// Load User Profile
const User = require("../../models/User");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Provider Profile Works"
  })
);

// @route   POST api/provider
// @desc    Create or edit provider profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProviderProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const {
      handle,
      location,
      status,
      bio,
      age,
      height,
      weight,
      ethnicity,
      bodyType,
      skills,
      tattoos,
      hairColor,
      eyeColor,
      cupSize,
      education
    } = req.body;
    const providerFields = {
      ...req.body,
      user: req.user.id
    };

    //Check if handle exists
    ProviderProfile.findOne({ user: req.user.id }).then(provider => {
      if (provider) {
        // Update
        ProviderProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: providerFields },
          { new: true }
        ).then(provider => res.json(provider));
      } else {
        // Create
        // Save ProviderProfile
        new ProviderProfile(providerFields)
          .save()
          .then(provider => res.json(provider));
      }
    });
  }
);

// @route   GET api/provider/all
// @desc    Get all providers
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  ProviderProfile.find()
    .populate("user", ["name"])
    .then(providers => {
      if (!providers) {
        errors.noprofile = "There are no providers";
        return res.status(404).json(errors);
      }

      res.json(providers);
    });
});

module.exports = router;
