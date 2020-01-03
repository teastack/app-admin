// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportAdminHome from '../../../app/controller/admin/home';
import ExportAdminUser from '../../../app/controller/admin/user';
import ExportAppHome from '../../../app/controller/app/home';
import ExportAppUser from '../../../app/controller/app/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    admin: {
      home: ExportAdminHome;
      user: ExportAdminUser;
    }
    app: {
      home: ExportAppHome;
      user: ExportAppUser;
    }
  }
}
