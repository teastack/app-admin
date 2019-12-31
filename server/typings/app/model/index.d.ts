// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminUser from '../../../app/model/admin_user';
import ExportMessageBoard from '../../../app/model/messageBoard';
import ExportPermission from '../../../app/model/permission';
import ExportRole from '../../../app/model/role';
import ExportRolePermission from '../../../app/model/role_permission';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    AdminUser: ReturnType<typeof ExportAdminUser>;
    MessageBoard: ReturnType<typeof ExportMessageBoard>;
    Permission: ReturnType<typeof ExportPermission>;
    Role: ReturnType<typeof ExportRole>;
    RolePermission: ReturnType<typeof ExportRolePermission>;
    User: ReturnType<typeof ExportUser>;
  }
}
