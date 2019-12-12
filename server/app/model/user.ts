module.exports = app => {
    const { STRING, DATE } = app.Sequelize;
    const User = app.model.define('users', {
      user_name:STRING,
      pass_word: STRING,
      stauts: STRING,
      nick_name: STRING,
      mobile_phone: STRING,
      email: STRING,
      creation_time: DATE,
      update_time: DATE,
    }, {
      timestamps: false // 禁止查询时间
    });
    return User;
  };