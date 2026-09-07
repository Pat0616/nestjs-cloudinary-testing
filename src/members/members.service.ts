import { Injectable } from "@nestjs/common";
import { MembersRepository } from "./members.repository.js";

@Injectable ()
export class MembersService {
    constructor(private readonly MemberRepository: MembersRepository) {}

    async getMembers()
    {
        return this.MemberRepository.getMembers();
    }

    async getMember(MemberId: string)
    {
        return this.MemberRepository.getMember(MemberId);
    }

    async deleteMember(MemberId: string)
    {
        return this.MemberRepository.deleteMember(MemberId);
    }

    async createMember(
        MemberId: string,
        Name: string,
        Tier: string,
        Username: string,
        ProfilePic: Express.Multer.File,
        Birthday: Date,
        Summary: string,
        Description: string,
        IGPs: string,
        Projects: string,
        Skills: string,
        Interests: string,
        Aspirations: string,
        Reputation: string,
    )
    {
        return this.MemberRepository.createMember(
            MemberId,
            Name,
            Tier,
            Username,
            ProfilePic,
            Birthday,
            Summary,
            Description,
            IGPs,
            Projects,
            Skills,
            Interests,
            Aspirations,
            Reputation
        );
    }


    async updateMember(
        MemberId: string,
        Name: string,
        Tier: string,
        Username: string,
        ProfilePic: Express.Multer.File,
        Birthday: Date,
        Summary: string,
        Description: string,
        IGPs: string,
        Projects: string,
        Skills: string,
        Interests: string,
        Aspirations: string,
        Reputation: string,
    )
    {
        return this.MemberRepository.updateMember(
            MemberId,
            Name,
            Tier,
            Username,
            ProfilePic,
            Birthday,
            Summary,
            Description,
            IGPs,
            Projects,
            Skills,
            Interests,
            Aspirations,
            Reputation
        );
    }
}