import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EventModule } from './events/events.module';
@Module({
  imports: [EventModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client/build'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
