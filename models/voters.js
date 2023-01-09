'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Voters.belongsTo(models.Elections, {
        foreignKey: "electionId",
      });
      Voters.hasMany(models.Votes, {
        foreignKey: "voterId",
      });
    }
  }
  Voters.init({
    voterId: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Voters',
  });
  return Voters;
};