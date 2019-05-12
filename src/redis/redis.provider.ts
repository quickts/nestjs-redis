import { Provider } from "@nestjs/common";
import { RedisOptions } from "./redis.interface";
import { RedisService } from "./redis.service";

export function createProvider(redisOptions: RedisOptions): Provider<RedisService> {
    const redisService = new RedisService(redisOptions);
    return {
        provide: RedisService,
        useValue: redisService
    };
}
