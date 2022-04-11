//引入db配置
import db from '../config/db.js'

//引入sequelize对象
const Sequelize = db.sequelize

//引入数据表模型
const user = Sequelize.import('../models/user')

//自动创建表
user.sync({ force: false });

class userModel {
  static async userRegist(data) {
    console.log('data', data)
    return await user.create({
      userName: data.userName,
      password: data.password,
    })
  }

  static async getUserInfo(id) {
    return await user.findOne({
      where: {
        id
      }
    })
  }
}

export default userModel