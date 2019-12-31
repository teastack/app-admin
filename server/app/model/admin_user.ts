
'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const AdminUser = app.model.define('admin_user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
    },
    password: {
      type: STRING,
    },
    created_at: DATE,
    updated_at: DATE,
    role_id: {
      type: INTEGER,
    },
  }, {
    freezeTableName: true,
  });
  AdminUser.associate = () => {
    app.model.AdminUser.belongsTo(app.model.Role, { as: 'role' });
  };
  return AdminUser;
};
