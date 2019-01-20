const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
//Load Validation
const validateProfileInput = require("../../validation/profile");
const validatePaycheckInput = require("../../validation/profile");

//Load Profile Model
const Profile = require("../../models/UserProfile");
// Load User Profile
const User = require("../../models/User");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Profile Works"
  })
);

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

const createProfile = (req, res) => {
  // Get fields
  const profileFields = {};
  profileFields.user = req.user.id;

  // Create
  // Save Profile
  new Profile(profileFields)
    .save()
    .then(profile => res.json(profile))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating profile"
      });
    });
};

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        )
          .then(profile => res.json(profile))
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occured while updating profile"
            });
          });
      } else {
        createProfile(req, res);
      }
    });
  }
);

// @route   POST api/profile/add-paycheck
// @desc    Add experience to profile
// @access  Private
router.post(
  "/paycheck",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePaycheckInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const addPaycheck = () => {
        const newPaycheck = {
          income: req.body.income,
          date: req.body.date,
          recurring: req.body.recurring
        };

        // Add to exp array
        profile.paychecks.unshift(newPaycheck);

        profile
          .save()
          .then(profile => res.json(profile))
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occured while adding a paycheck"
            });
          });
      };

      if (profile) {
        addPaycheck();
      } else {
        const profileFields = {
          paychecks: []
        };

        const newPaycheck = {
          income: req.body.income,
          date: req.body.date,
          recurring: req.body.recurring
        };

        // Add to exp array
        profileFields.paychecks.unshift(newPaycheck);
        profileFields.user = req.user.id;

        // Create
        // Save Profile
        new Profile(profileFields)
          .save()
          .then(profile => res.json(profile))
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occured while creating profile"
            });
          });
      }
    });
  }
);

const getCurrentPaychecks = function(req, res) {
  Profile.aggregate(
    [
      { $unwind: "$paychecks" },
      {
        $project: {
          month: { $month: "$paychecks.date" },
          income: "$paychecks.income",
          recurring: "$paychecks.recurring",
          date: {
            $dateToString: { format: "%m/%d/%Y", date: "$paychecks.date" }
          },
          _id: "$paychecks._id"
        }
      },
      {
        $match: {
          month: new Date().getMonth() + 1
        }
      },
      {
        $sort: {
          date: 1
        }
      }
    ],
    function(err, result) {
      if (err) res.sendStatus(404);
      res.send(result);
    }
  );
};

// @route   GET api/profile/current-paychecks
// @desc    Get the current paychecks from this month
// @access  Private
router.get(
  "/current-paychecks",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile.paychecks) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }

        return getCurrentPaychecks(req, res);
      })
      .catch(err =>
        res.status(404).json({
          nopaychecksfound: "No paychecks found"
        })
      );
  }
);

// @route   POST api/profile/paychecks
// @desc    Add experience to profile
// @access  Private
router.get(
  "/paychecks",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
      })
      .catch(err => res.status(404).json(err));
  }
);

const getPaycheck = (req, res) => {
  //Profile.paychecks.findOne(mongoose.Types.ObjectId(req.params.id));
  Profile.aggregate(
    [
      {
        $unwind: "$paychecks"
      },
      {
        $project: {
          _id: "$paychecks._id"
        }
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.params.id)
        }
      }
    ],
    function(err, result) {
      if (err) res.sendStatus(404);
      res.send(result);
    }
  );
};

// @route   GET api/profile/paycheck/:id
// @desc    Get paycheck
// @access  Private
router.get(
  "/paycheck/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne(
      {
        "paychecks._id": req.params.id
      },
      {
        "paychecks.$.": 1
      },
      {
        user: req.user.id
      }
    )
      .then(paycheck => {
        return res.json(paycheck.paychecks[0]);
      })
      .catch(() => res.status(404).json({ notfound: "Paycheck not found" }));
  }
);

// @route   DELETE api/profile/paychecks/:id
// @desc    Delete paycheck
// @access  Private
router.delete(
  "/paycheck/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne(
      {
        "paychecks._id": req.params.id
      },
      {
        "paychecks.$.": 1
      },
      {
        user: req.user.id
      }
    )
      .then(profile => {
        profile.paychecks[0].remove();

        profile.save().then(profile => res.json(profile));
      })
      .catch(() => res.status(404).json({ notfound: "Profile not found" }));
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", ["name"])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    });
});

module.exports = router;
