module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    coursenum: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dept: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    level: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    hours: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
{
  timestamps:false
});

  return Course;
};
