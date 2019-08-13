import { Module } from "@nestjs/common";
import { AModule } from "./a/a.module";
import { BModule } from "./b/b.module";

@Module({
    imports: [AModule, BModule]
})
export class AppModule {}
