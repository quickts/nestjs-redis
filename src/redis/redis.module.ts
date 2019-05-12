import { Module, DynamicModule, Provider } from "@nestjs/common";
import { RedisOptions } from "./redis.interface";
import { createProvider } from "./redis.provider";

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
