import { Provider } from "@nestjs/common";
import { RedisOptions } from "./redis.interface";
import { REDIS_OPTION } from "./redis.constants";

export function createProvider(redisOptions?: RedisOptions): Provider {
    return {
        provide: REDIS_OPTION,
        useFactory: function() {
            return redisOptions;
        }
    };
}
