import 'multer';

export class UpdateMemberDto {
  id: number;
  MemberId: string;
  Name: string;
  Tier: string;
  Username: string;
  Birthday: Date;
  Summary: string;
  Description: string;
  IGPs: string;
  Projects: string;
  Skills: string;
  Interests: string;
  Aspirations: string;
  Reputation: string;
  ProfilePic: Express.Multer.File;

}