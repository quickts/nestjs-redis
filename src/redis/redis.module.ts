import { Global, Module, DynamicModule } from "@nestjs/common";
import { RedisOptions } from "./redis.interface";
import { createProvider } from "./redis.provider";

@Global()
@Module({})
export class RedisModule {
    static forRoot(options: RedisOptions): DynamicModule {
        const provider = createProvider(options);
        return {
            module: RedisModule,
            providers: [provider],
            exports: [provider]
        };
    }
}
