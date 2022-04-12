
import { userModel } from '../models/user/index.js'
//引入数据表模型
const user = userModel()

//自动创建表
user.sync({ force: false });

class UserModelService {
  async userRegist(data) {
    return await user.create({
      userid: data.userid,
      username: data.userName,
      password: data.password,
      email: data.email,
    })
  }

  async getUserInfo(username,password) {
    if (username && password) {
      let res = await user.findOne({
        where: {
          username,
          password
        }
      })
      return res
    } 
    return false
    
  }

  async getAllUser() {
    return await user.findAll()
  }
}
const userModelService = new UserModelService()
export default userModelService