import { Redis } from "ioredis";

export interface OnRedisClientInit {
    onRedisClientInit(redis: Redis): any;
}
