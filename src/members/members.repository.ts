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
        console.log("Creating member with ID:", MemberId, " and data:", {
            MemberId,
            Name,
            Tier,
            Username,
            url,
            Birthday,
            Summary,
            Description,
            IGPs,
            Projects,
            Skills,
            Interests,
            Aspirations,
            Reputation
        });

       return this.baserowClient.createRow({
                field_10603296: MemberId,
                field_10603297: Name,
                field_10603298: Tier,
                field_10603649: Username,
                field_10605740: url,
                field_10603851: Birthday,
                field_10603852: Summary,
                field_10603853: Description,
                field_10603893: IGPs,
                field_10603950: Projects,
                field_10603951: Skills,
                field_10603952: Interests,
                field_10604055: Aspirations,
                field_10604075: Reputation
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
        field_10603296: MemberId,
        field_10603297: Name,
        field_10603298: Tier,
        field_10603649: Username,
        field_10605740: url,
        field_10603851: Birthday,
        field_10603852: Summary,
        field_10603853: Description,
        field_10603893: IGPs,
        field_10603950: Projects,
        field_10603951: Skills,
        field_10603952: Interests,
        field_10604055: Aspirations,
        field_10604075: Reputation
        }
       )
    }



}