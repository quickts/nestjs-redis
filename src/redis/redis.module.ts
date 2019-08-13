import { Global, Module, DynamicModule } from "@nestjs/common";
import { ScannerModule } from "@quickts/nestjs-scanner";
import { RedisOptions } from "ioredis";
import { createProvider } from "./redis.provider";
import { RedisService } from "./redis.service";

@Module({})
export class RedisModule {
    static forRoot(options: RedisOptions): DynamicModule {
        return {
            module: RedisModule,
            imports: [ScannerModule.forRoot(false)],
            providers: [RedisService, createProvider(options)],
            exports: [RedisService]
        };
    }
}

@Global()
@Module({})
export class RedisGlobalModule {
    static forRoot(options: RedisOptions): DynamicModule {
        return {
            module: RedisGlobalModule,
            imports: [ScannerModule.forRoot(true)],
            providers: [RedisService, createProvider(options)],
            exports: [RedisService]
        };
    }
}
