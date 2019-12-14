// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/service/home';
import ExportLogin from '../../../app/service/login';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    home: ExportHome;
    login: ExportLogin;
    user: ExportUser;
  }
}
