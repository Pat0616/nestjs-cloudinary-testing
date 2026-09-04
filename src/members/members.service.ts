import { Injectable } from "@nestjs/common";
import { MembersRepository } from "./members.repository.js";

@Injectable ()
export class MembersService {
    constructor(private readonly MemberRepository: MembersRepository) {}

    
}