# nestjs-redis

## Installation

    $ npm install @quickts/nestjs-redis ioredis
    $ npm install -D @types/ioredis

## Usage

```ts

// file: app.module.ts
import { Module } from "@nestjs/common";
import { RedisModule } from "@quickts/nestjs-redis";

@Module({
    imports: [RedisModule.forRoot({...})], // 注册模块
})
export class ApplicationModule {}

// file: other.ts
import { RedisClient, OnRedisClientInit } from "@quickts/nestjs-redis";
import { Redis } from "ioredis";

@Injectable()
class OtherService implements OnRedisClientInit {
    @RedisClient()// 方式一: 使用装饰器注入
    redis: Redis;

    onRedisClientInit(redis: Redis){
        this.redis = redis;// 方式二: 实现接口自行赋值
    }
}
```
