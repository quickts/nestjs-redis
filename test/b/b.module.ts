import { Module } from "@nestjs/common";
import { RedisModule } from "../../src";

@Module({
    imports: [RedisModule.forRoot({})]
})
export class BModule {}
