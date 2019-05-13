import { Global, Module, DynamicModule } from "@nestjs/common";
import { RedisOptions } from "./redis.interface";
import { createProvider } from "./redis.provider";

@Global()
@Module({})
export class RedisModule {
    static forRoot(options: RedisOptions, token?: any): DynamicModule {
        const provider = createProvider(options, token);
        return {
            module: RedisModule,
            providers: [provider],
            exports: [provider]
        };
    }
}
