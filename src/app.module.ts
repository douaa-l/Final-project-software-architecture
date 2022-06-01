import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from "@nestjs/typeorm";
import {config} from './orm.config' ;
import { UsersModule } from './Model/User/users.module';
import { TestsModule } from './tests/tests.module';
import { ProductsModule } from './Model/Products/products.module';

@Module({
  imports: [
           TypeOrmModule.forRoot(config),
              UsersModule,
              TestsModule,
              ProductsModule,
            
  ],
  controllers: [AppController],
  providers: [AppService],
  

})
export class AppModule {}




