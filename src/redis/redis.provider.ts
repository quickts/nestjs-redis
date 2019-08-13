import { Provider } from "@nestjs/common";
import { RedisOptions } from "ioredis";
import { REDIS_OPTION } from "./redis.constants";

export function createProvider(redisOptions: RedisOptions): Provider {
    return {
        provide: REDIS_OPTION,
        useValue: redisOptions
    };
}
