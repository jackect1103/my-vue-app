import userModel from '../../service/user.js'
class UserController {


  /**
   * 注册账号
   * @param {*} ctx 
   */
  async registerHandle(ctx) {
    const req = ctx.request.body
    console.log('ctx', ctx)
    if (req.userName && req.password) {
      try {
        const query = await userModel.getUserInfo(req.id);
        if (query) {
          ctx.response.status = 200;
          ctx.body = {
            code: -1,
            desc: '用户已存在'
          }
        } else {
          const param = {
            password: req.password,
            userName: req.userName
          }
          const data = await userModule.userRegist(param);
          ctx.response.status = 200;
          ctx.body = {
            code: 0,
            desc: '用户注册成功',
            userInfo: {
              mobileNo: req.mobileNo
            }
          }
        }
      } catch (error) {
        ctx.response.status = 416;
        ctx.body = {
          code: -1,
          desc: '参数不齐全'
        }
      }
    }


  }

  /**
   * 登录账号
   * @param {*} ctx 
   */
  loginHandle(ctx) {
    const body = ctx.request.body
    console.log('ctx', ctx)
    ctx.body = {
      'code': 0,
      'data': body,
      "message": "登陆成功!",
      "msg": "OK!",
      "subCode": null,
      "subMsg": null
    }
  }
}

const userController = new UserController()
export default userController