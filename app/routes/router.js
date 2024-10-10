module.exports = app => {
  const course = require("../controllers/controller");
  var router = require("express").Router();
  
  // Create a new course
  router.post("/", course.create);
  // Retrieve all course
  router.get("/", course.findAll);
  // Retrieve all published course
  router.get("/published", course.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", course.findOne);
  // Update a Tutorial with id
  router.put("/:id", course.update);
  // Delete a Tutorial with id
  router.delete("/:id", course.delete);
  // Delete all course
  router.delete("/", course.deleteAll);
  app.use('/course', router);
  //app.use("/course", router);
  router.delete("/course/", course.deleteAll);
  app.use('/course-t9', router);
  //app.use("/course/course", router);

};



