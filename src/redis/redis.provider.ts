import { Provider } from "@nestjs/common";
import { RedisOptions } from "./redis.interface";
import { RedisClient } from "./redis.client";

export function createProvider(redisOptions: RedisOptions): Provider<RedisClient> {
    const client = new RedisClient(redisOptions);
    return {
        provide: RedisClient,
        useValue: client
    };
}
