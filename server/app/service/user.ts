import { Service } from 'egg';

export default class User extends Service {

  /**
   * 获取用户列表
   */
  public async List() {
    // console.log(this.ctx.state.user);     创建时间          过期时间 
    // 获取jwt信息 { username: 'jack14', iat: 1576138427, exp: 1576224827 }
    const result: any = await this.ctx.model.User.findAll({
      // 属性查询字段
      attributes: ['id', 'user_name', 'nick_name', 'mobile_phone', 'email', 'creation_time', 'update_time'],
      order: [['creation_time', 'DESC']],  // 时间倒序
      raw: true // 是否返回数组
    });
    return {
        code: 200,
        data: result,
        msg: '获取用户列表成功'
    }
  }

  /*
  * 注册
  */ 
 public async register() {
  const fs = require("fs");  // 引入fs模块
  const { Op } = this.app.Sequelize;  // 导入Sequelize的mysql查询语句eg：or，and
  const crypto = require('crypto');  // 导入加密模块，里面有MD5加密解密方法
  const md5 = crypto.createHash('md5');
  const parameter = this.ctx.request.body;  // 获取请求过来的参数

  // 校验格式
  if (!(/^[a-zA-Z0-9_]{1,16}$/.test(parameter.user_name))) {
   return {
     code: 999,
     data: 'user_name',
     msg: '用户名格式不正确(字母,数字,下划线)'
   } 
  } else if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(parameter.mobile_phone))) {
   return {
     code: 999,
     data: 'mobile_phone',
     msg: '手机号码不正确'
   } 
  } else if (!(/^[a-zA-Z0-9_]{6,20}$/.test(parameter.pass_word))){
   return {
     code: 999,
     data: 'pass_word',
     msg: '密码格式不正确(字母,数字,下划线)'
   }
  }
  // 校验用户信息是否重复注册
  const repeatedData: any = await this.ctx.model.User.findAll({ 
    where: {
      [Op.or]: [{user_name: parameter.user_name}, {mobile_phone: parameter.mobile_phone}]
    },
    raw: true
  });
  if (repeatedData && repeatedData.length > 0) {
    if (repeatedData[0].user_name === parameter.user_name) {
      return {
       code: 999,
       data: 'user_name',
       msg: '该用户名已存在'
      }
    } else if (repeatedData[0].mobile_phone === parameter.mobile_phone) {
      return {
       code: 999,
       data: 'mobile_phone',
       msg: '该手机号码已存在'
      }
    }
  }

  // 添加用户文件夹
  const fileMkdir = `app/public/images/user/${parameter.user_name}`;
  const path = `app/public/images/user/${parameter.user_name}/${Date.now()}.png`;
  // 判断用户文件夹是否存在
  const isFile = fs.existsSync(fileMkdir);
  if (!isFile) {
    fs.mkdirSync(fileMkdir, (err) => {
      if(err){
          throw err;
      }
    });
  };
  if (parameter.img_url) {
    const base64 = parameter.img_url.replace(/^data:image\/\w+;base64,/, "");
    const dataBuffer = Buffer.from(base64, 'base64'); //把base64码转成buffer对象
    fs.writeFile(path, dataBuffer, function(err) {
      if (err) {
          throw err;
      }
    });
    parameter.img_url = path.slice(3);
  } else {
    if (parameter.sex) {
      parameter.img_url = '/public/images/1.png'
    } else {
      parameter.img_url = '/public/images/0.png'
    }
  }
  // 添加用户
  parameter.pass_word = md5.update(parameter.pass_word).digest('hex');  // 加密密码
  const result: any = await this.ctx.model.User.create({
    user_name: parameter.user_name,
    pass_word: parameter.pass_word,
    nick_name: parameter.nick_name ? parameter.nick_name : parameter.user_name,
    img_url: parameter.img_url,
    sex: parameter.sex,
    stauts: 1,
    mobile_phone: parameter.mobile_phone
  });
  if (!result) {
    return {
      code: 999,
      data: '注册失败',
      msg: '注册失败'
    }
  }
  return {
    code: 200,
    data: '注册成功',
    msg: '注册成功'
  }
 }

}

