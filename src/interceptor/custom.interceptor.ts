import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next?.handle()?.pipe(
      map((data) => {
        const res = { ...data, createdAt: data?.created_at };
        delete res?.created_at;
        delete res?.updated_at;
        return res;
      }),
    );
  }
}
