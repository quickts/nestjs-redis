import { Provider } from "@nestjs/common";
import { RedisOptions } from "ioredis";
import { REDIS_OPTION, COMMAND_ADDER } from "./redis.constants";
import { CommandAdder } from "./redis.interface";

export function createProvider(redisOptions: RedisOptions): Provider {
    return {
        provide: REDIS_OPTION,
        useValue: redisOptions
    };
}

export function createAdderProvider(adder: CommandAdder): Provider {
    return {
        provide: COMMAND_ADDER,
        useValue: adder
    };
}
