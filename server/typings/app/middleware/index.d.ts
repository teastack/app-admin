// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportVerificationsession from '../../../app/middleware/verificationsession';

declare module 'egg' {
  interface IMiddleware {
    verificationsession: typeof ExportVerificationsession;
  }
}
