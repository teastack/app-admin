module.exports = app => {
    const { STRING, DATE } = app.Sequelize;
    const MessageBoard = app.model.define('message_board', {
      uid:{
        type: app.Sequelize.UUID,  // 取消默认id为主键
        primaryKey: true
      },
      message: STRING,
      img_url: STRING,
      creation_time: DATE,
      update_time: DATE,
    }, {
      timestamps: false // 禁止查询时间
    });
    return MessageBoard;
  };