'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Permission = app.model.define('permission', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
    },
    url: {
      type: STRING,
    },
    status: {
      type: INTEGER,
    },
    created_at: DATE,
    updated_at: DATE,
    permission_id: {
      type: INTEGER,
    },
  }, {
    freezeTableName: true,
  });
  Permission.associate = () => {
    app.model.Permission.belongsTo(app.model.Permission, { as: 'permissions', foreignKey: 'permission_id' });
  };
  return Permission;
};
