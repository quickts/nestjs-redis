import { Global, Module, DynamicModule } from "@nestjs/common";
import { RedisOptions } from "./redis.interface";
import { createProvider } from "./redis.provider";
import { RedisClient } from "./redis.client";

@Module({
    providers: [RedisClient, createProvider()],
    exports: [RedisClient]
})
export class RedisModule {
    static forRoot(options: RedisOptions): DynamicModule {
        return {
            module: RedisModule,
            providers: [RedisClient, createProvider(options)],
            exports: [RedisClient]
        };
    }
}

@Global()
@Module({
    providers: [RedisClient, createProvider()],
    exports: [RedisClient]
})
export class RedisGlobalModule {
    static forRoot(options?: RedisOptions): DynamicModule {
        return {
            module: RedisGlobalModule,
            providers: [RedisClient, createProvider(options)],
            exports: [RedisClient]
        };
    }
}
