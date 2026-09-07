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
    ) //data still needs to be defined
    {
        const { url, publicId } = await this.cloudinaryClient.upload(ProfilePic);
       // code for creating member in Baserow with photourl
        console.log("Creating member with ID:", MemberId);
        
       return this.baserowClient.createRow({
        10603296: MemberId,
        10603297: Name,
        10603298: Tier,
        10603649: Username,
        10605740: url,
        10603851: Birthday,
        10603852: Summary,
        10603853: Description,
        10603893: IGPs,
        10603950: Projects,
        10603951: Skills,
        10603952: Interests,
        10604055: Aspirations,
        10604075: Reputation
       })

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
        const { url, publicId } = await this.cloudinaryClient.upload(ProfilePic);
       // code for creating member in Baserow with photourl
        console.log("Updating member with ID:", MemberId);
       this.baserowClient.updateRow(MemberId,
        {
            10603296: MemberId,
            10603297: Name,
            10603298: Tier,
            10603649: Username,
            10605740: url,
            10603851: Birthday,
            10603852: Summary,
            10603853: Description,
            10603893: IGPs,
            10603950: Projects,
            10603951: Skills,
            10603952: Interests,
            10604055: Aspirations,
            10604075: Reputation
        }
       )
    }



}