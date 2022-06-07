import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";
export const  config : TypeOrmModuleOptions  ={
    type :'postgres',
    port : 5432,
    host : '127.0.0.1',
    database :'alog',
    synchronize: true,
    username : 'postgres', 
    password : 'root',
   
    entities: [join(__dirname, '**', '*.entity.{ts,js}')]
}