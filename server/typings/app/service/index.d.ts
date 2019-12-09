// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/service/login';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    login: ExportLogin;
    user: ExportUser;
  }
}
