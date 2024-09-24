const db = require("../models");
const Course = db.course;
const Op = db.Sequelize.Op;

// Create and Save a new course
exports.create = (req, res) => {
  // Validate request
  if (!req.body.level && !req.body.dept && !req.body.coursenum && !req.body.hours) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a course
  const course = {
    dept: req.body.dept,
    coursenum: req.body.coursenum,
    coursename:req.body.coursename,
    level: req.body.level,
    hours: req.body.hours,
    description: req.body.description,
  };

  // Save Course in the database
  Course.create(course)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the course.",
      });
    });
};

// Retrieve all Courses from the database
exports.findAll = (req, res) => {
  const coursenum = req.query.coursenum;
  var condition = coursenum
    ? { coursenum: { [Op.like]: `%${coursenum}%`, } ,}
    : null;

  Course.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving courses.",
      });
    });
};

// Retrieve all Courses for a specific department
exports.findAllForDept = (req, res) => {
  const dept = req.params.dept;

  Course.findAll({ where: { dept: dept } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving courses.",
      });
    });
};

// Find a single Course by ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log("id="+id);
  console.log(Course);

  Course.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Course with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Course with id=" + id,
      });
    });
};

// Update a Course by ID
exports.update = (req, res) => {
  const id = req.params.id;

  Course.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Course was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Course with id=${id}. Maybe Course was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Course with id=" + id,
      });
    });
};

// Delete a Course by ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Course.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Course was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Course with id=${id}. Maybe Course was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Course with id=" + id,
      });
    });
};

// Delete all Courses from the database
exports.deleteAll = (req, res) => {
  Course.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Courses were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all courses.",
      });
    });
};

// Find all published Courses
exports.findAllPublished = (req, res) => {
  Course.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving courses.",
      });
    });
};
