module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const User = app.model.define('users', {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      sex: INTEGER,
      user_name:STRING,
      pass_word: STRING,
      stauts: INTEGER,
      nick_name: STRING,
      img_url: STRING,
      mobile_phone: STRING,
      email: STRING,
      creation_time: DATE,
      update_time: DATE,
    }, {
      timestamps: false // 禁止查询时间
    });

    // 关联message_borard表
    User.associate = function (){
      // 与MessageBoard存在一对一关系，所以是hasOne()
      app.model.User.hasOne(app.model.MessageBoard, {foreignKey: 'uid'});
    }

    return User;
  };