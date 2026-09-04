import { Controller } from "@nestjs/common";
import { MembersService } from "./members.service.js";

@Controller()
export class MembersController {
    constructor(private readonly MemberService: MembersService) {}

    
}