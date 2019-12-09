import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};

export default plugin;
