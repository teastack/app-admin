// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMessageBoard from '../../../app/model/messageBoard';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    MessageBoard: ReturnType<typeof ExportMessageBoard>;
    User: ReturnType<typeof ExportUser>;
  }
}
