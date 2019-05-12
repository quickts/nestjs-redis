import { Injectable } from "@nestjs/common";
import { createHash } from "crypto";
import * as Redis from "ioredis";

@Injectable()
export class RedisClient extends Redis {
    private shaCache: { [script: string]: string } = {};

    public executeCommand(cmd: string, ...args: any[]) {
        return (this as any)[cmd](...args);
    }

    public async executeScript(script: string, numKeys: number, ...args: (string | number)[]) {
        let sha = this.shaCache[script];
        if (!sha) {
            sha = createHash("sha1")
                .update(script)
                .digest("hex")
                .toLocaleLowerCase();
            this.shaCache[script] = sha;
        }
        try {
            return await this.evalsha(sha, numKeys, ...args);
        } catch (err) {
            if (err.toString().indexOf("NOSCRIPT") === -1) {
                throw err;
            }
            return await this.eval(script, numKeys, ...args);
        }
    }
}
