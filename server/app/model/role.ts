module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const Role = app.model.define('role', {
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
      permission_id: {
        type: STRING,
      },
      created_at: DATE,
      updated_at: DATE,
    }, {
      // freezeTableName: true,
      timestamps: false, // 禁止查询时间
    });
    Role.associate = () => {
      app.model.Role.hasMany(app.model.AdminUser, { foreignKey: 'role_id' });
    };
    return Role;
  };
