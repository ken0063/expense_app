import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [ReportModule],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
  ],
})
export class AppModule {}
