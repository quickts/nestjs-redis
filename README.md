# nestjs-redis

## Installation

    $ npm install @quickts/nestjs-redis

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
import { RedisClient } from "@quickts/nestjs-redis";

class OtherService {
    constructor(
        private readonly redis: RedisClient // 注入client
    ) {}
}
```
