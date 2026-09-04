
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
  ProfilePic: file;


Database Schema:
```Typescript
export type MemberDto = {
  id: number //nu
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
  ProfilePictureUrl: string;
};

```

m_1 data primary key

env setup

BASEROW_API_URL=...
BASEROW_API_TOKEN=...
BASEROW_TABLE_ID=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
