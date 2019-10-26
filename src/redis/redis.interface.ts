import { Redis } from "ioredis";

export interface OnRedisClientInit {
    onRedisClientInit(redis: Redis): any;
}

export interface CommandAdder {
    (redis: Redis): any;
}
