module.exports = app => {
    const { STRING, DATE, INTEGER } = app.Sequelize;
    const MessageBoard = app.model.define('message_board', {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true // uid为主键
      },
      uid: INTEGER,
      message: STRING,
      img_url: STRING,
      creation_time: DATE,
      update_time: DATE,
    }, {
      timestamps: false // 禁止查询时间
    });

    MessageBoard.associate = function (){
      app.model.MessageBoard.belongsTo(app.model.User, {foreignKey: 'uid'});
  }

    return MessageBoard;
  };