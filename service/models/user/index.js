//引入db配置
import {sequelize,DataTypes} from '../../config/db.js'
const userModel = function () {

  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userid'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'username'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    }
  },
    {
      timestamps: false
    })
}
export {
  userModel
}