import 'egg';

declare module 'egg' {

    // 添加数据库的方法
    interface mysql {
        get(tableName: String, find: {}): Promise<Any>
        select(tableName: String): Promise<Any>
        query(sql: String, values: Any[]): Promise<Any>
    }
    
    // 挂载到Application
    interface Application {
        mysql: mysql;
    }

    // ts jwt
    interface Application {
        jwt: any;
    }
}