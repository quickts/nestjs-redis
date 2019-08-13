import { REDIS_CLIENT_METADATA } from "./redis.constants";

export function RedisClient() {
    return (target: any, propertyKey: string | symbol) => {
        Reflect.set(target, propertyKey, null);
        Reflect.defineMetadata(REDIS_CLIENT_METADATA, true, target, propertyKey);
    };
}
