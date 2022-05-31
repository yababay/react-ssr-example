const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pony extends Model {
    static associate() {}
  }
  Pony.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Pony',
    tableName: 'Ponies',
  });
  return Pony;
};
