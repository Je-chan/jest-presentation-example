'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grew.init(
    {
      name: DataTypes.STRING,
      slogan: DataTypes.STRING,
      nickname: DataTypes.STRING,
      belongsTo: DataTypes.STRING,
      image: DataTypes.STRING,
      nicknameEng: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Grew',
    }
  );
  return Grew;
};
