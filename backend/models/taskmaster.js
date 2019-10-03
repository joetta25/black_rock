'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskMaster = sequelize.define('TaskMaster', {
    Id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    time: DataTypes.TIME,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    createdTime: DataTypes.TIME,
    status: DataTypes.STRING
  }, {});
  TaskMaster.associate = function(models) {
    // associations can be defined here
  };
  return TaskMaster;
};