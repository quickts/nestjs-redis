import { Global, Module, DynamicModule } from "@nestjs/common";
import { ScannerModule } from "@quickts/nestjs-scanner";
import { RedisOptions } from "ioredis";
import { createProvider, createAdderProvider } from "./redis.provider";
import { RedisService } from "./redis.service";
import { CommandAdder } from "./redis.interface";

@Module({})
export class RedisModule {
    static forRoot(options: RedisOptions, commandAdder: CommandAdder = () => null): DynamicModule {
        return {
            module: RedisModule,
            imports: [ScannerModule.forRoot(false)],
            providers: [RedisService, createProvider(options), createAdderProvider(commandAdder)],
            exports: [RedisService]
        };
    }
}

@Global()
@Module({})
export class RedisGlobalModule {
    static forRoot(options: RedisOptions, commandAdder: CommandAdder = () => null): DynamicModule {
        return {
            module: RedisGlobalModule,
            imports: [ScannerModule.forRoot(true)],
            providers: [RedisService, createProvider(options), createAdderProvider(commandAdder)],
            exports: [RedisService]
        };
    }
}
