module.exports = app => {
  const course = require("../app/controllers/controller");
  var router = require("express").Router();
  
  // Create a new course
  router.post("/course", course.create);
  // Retrieve all course
  router.get("/course", course.findAll);
  // Retrieve all published course
  router.get("/published", course.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/course/:id", course.findOne);
  // Update a Tutorial with id
  router.put("/course/:id", course.update);
  // Delete a Tutorial with id
  router.delete("/course/:id", course.delete);
  // Delete all course
  router.delete("/course/", course.deleteAll);
  app.use('/course', router);
  //app.use("/course/course", router);

};



