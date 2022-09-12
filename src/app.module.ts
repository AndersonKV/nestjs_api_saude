import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/PrismaService';
import { MessageModule } from './modules/message/message.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
