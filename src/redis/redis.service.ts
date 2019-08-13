import { Injectable, Inject, Logger, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { ScannerService } from "@quickts/nestjs-scanner";
import { RedisOptions } from "ioredis";
import * as IORedis from "ioredis";
import { REDIS_OPTION, REDIS_CLIENT_METADATA } from "./redis.constants";

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger("RedisService");
    private redisClient: IORedis.Redis = null;
    constructor(
        @Inject(REDIS_OPTION) private readonly redisOptions: RedisOptions, //
        private readonly scannerService: ScannerService
    ) {}

    async onModuleInit() {
        this.redisClient = new IORedis(this.redisOptions);
        this.redisClient.on("error", err => {
            this.logger.error(err);
        });
        await this.scannerService.scanProviderPropertyMetadates(REDIS_CLIENT_METADATA, async (instance: any, propertyKey: string) => {
            instance[propertyKey] = this.redisClient;
        });

        await this.scannerService.scanProvider(async instance => {
            if (instance["onRedisClientInit"]) {
                await instance["onRedisClientInit"](this.redisClient);
            }
        });
    }

    async onModuleDestroy() {
        if (this.redisClient) {
            await this.redisClient.quit();
            this.redisClient = null;
        }
    }

    getClient() {
        return this.redisClient;
    }
}
