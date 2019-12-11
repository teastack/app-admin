module.exports = app => {
    const { STRING } = app.Sequelize;
    const User = app.model.define('users', {
      user_name:STRING
    });
    return User;
  };