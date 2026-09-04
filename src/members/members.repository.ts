import { Injectable } from "@nestjs/common";
import { BaserowClient } from "../database/baserow.client.js";
import { CloudinaryClient } from "../cloudinary/cloudinary.client.js";

@Injectable ()
export class MembersRepository{
    
    constructor(private readonly cloudinaryClient: CloudinaryClient, private readonly baserowClient: BaserowClient) {}


    async getMembers()
    {
        return this.baserowClient.getRows();
    }

    async getMember(MemberId: string)
    {
        return this.baserowClient.getRow(MemberId);
    }

    async deleteMember(MemberId: string)
    {
        return this.baserowClient.deleteRow(MemberId);
    }


    async createMember(
    MemberId: string,
    Name: string,
    Tier: string,
    Username: string,
    Birthday: Date,
    Summary: string,
    Description: string,
    IGPs: string,
    Projects: string,
    Skills: string,
    Interests: string,
    Aspirations: string,
    Reputation: string,
    ProfilePic: Express.Multer.File,
    ) //data still needs to be defined
    {
        const { url, publicId } = await this.cloudinaryClient.upload(ProfilePic);
       // code for creating member in Baserow with photourl

    }

    async updateMember()
    {

    }



}