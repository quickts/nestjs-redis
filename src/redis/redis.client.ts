import { Injectable } from "@nestjs/common";
import * as Redis from "ioredis";

@Injectable()
export class RedisClient extends Redis {}
