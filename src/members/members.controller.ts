import { 
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
    UploadedFile,
} from "@nestjs/common";
import { MembersService } from "./members.service.js";
import { FileInterceptor } from "@nestjs/platform-express/multer/interceptors/index.js";

@Controller()
export class MembersController {
    constructor(private readonly MemberService: MembersService) {}

    @Get()
    async getMembers(){
        return this.MemberService.getMembers();
    }

    @Get(':MemberId')
    async getMember(MemberId: string){
        return this.MemberService.getMember(MemberId);
    }

    @Delete(':MemberId')
    async deleteMember(MemberId: string){
        return this.MemberService.deleteMember(MemberId);
    }

    @Post()
    @UseInterceptors(FileInterceptor('ProfilePic'))
    async createMember(
        @Body() MemberData: any,
        @UploadedFile() ProfilePic: Express.Multer.File
    ){
        return this.MemberService.createMember(
            MemberData.MemberId,
            MemberData.Name,
            MemberData.Tier,
            MemberData.Username,
            ProfilePic,
            MemberData.Birthday,
            MemberData.Summary,
            MemberData.Description,
            MemberData.IGPs,
            MemberData.Projects,
            MemberData.Skills,
            MemberData.Interests,
            MemberData.Aspirations,
            MemberData.Reputation
        );
    }

    @Patch(':MemberId')
    @UseInterceptors(FileInterceptor('ProfilePic'))
    async updateMember(
        @Param('MemberId') MemberId: string,
        @Body() MemberData: any,
        @UploadedFile() ProfilePic: Express.Multer.File
    ){
        return this.MemberService.updateMember(
            MemberId,
            MemberData.Name,
            MemberData.Tier,
            MemberData.Username,
            ProfilePic,
            MemberData.Birthday,
            MemberData.Summary,
            MemberData.Description,
            MemberData.IGPs,
            MemberData.Projects,
            MemberData.Skills,
            MemberData.Interests,
            MemberData.Aspirations,
            MemberData.Reputation
        );
    }
}