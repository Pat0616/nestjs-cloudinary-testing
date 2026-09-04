import { Module } from "@nestjs/common";

import { BaserowClient } from "./baserow.client.js";

@Module({
  providers: [
    BaserowClient
  ],

  exports: [
    BaserowClient
  ],
})
export class DatabaseModule {}
