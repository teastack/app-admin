'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Permission = app.model.define('permission', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
    },
    status: {
      type: INTEGER,
    },
    level: {
      type: STRING,
    },
    created_at: DATE,
    updated_at: DATE,
    permission_id: {
      type: INTEGER,
    },
  }, {
    freezeTableName: true,
    timestamps: false, // 禁止查询时间
  });
  // Permission.associate = () => {
  //   app.model.Permission.belongsTo(app.model.Permission, { as: 'permissions', foreignKey: 'permission_id' });
  // };
  return Permission;
};
