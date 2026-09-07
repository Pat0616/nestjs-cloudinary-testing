import { Module } from "@nestjs/common"                                                 ;
import { MembersRepository } from "./members.repository.js";
import { MembersService } from "./members.service.js";
import { MembersController } from "./members.controller.js";
import { DatabaseModule } from "../database/database.module.js";
import { CloudinaryModule } from "../cloudinary/cloudinary.module.js";

@Module ({
    controllers: [MembersController],
    providers: [MembersService, MembersRepository],
    imports: [DatabaseModule, CloudinaryModule],
})

export class MembersModule {}