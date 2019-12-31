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
      created_at: DATE,
      updated_at: DATE,
    }, {
      freezeTableName: true,
    });
    Role.associate = () => {
      app.model.Role.hasMany(app.model.User, { as: 'admin_user' });
    };
    return Role;
  };
