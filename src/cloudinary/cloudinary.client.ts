import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { v2 as cloudinary } from "cloudinary";

@Injectable()
export class CloudinaryClient {
  constructor(
    private readonly configService: ConfigService,
  ) {
    cloudinary.config({
      cloud_name: this.configService.getOrThrow<string>(
        "CLOUDINARY_CLOUD_NAME",
      ),
      api_key: this.configService.getOrThrow<string>(
        "CLOUDINARY_API_KEY",
      ),
      api_secret: this.configService.getOrThrow<string>(
        "CLOUDINARY_API_SECRET",
      ),
    });
  }

  async upload(
    file: Express.Multer.File,
  ): Promise<{
    url: string;
    publicId: string;
  }> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "members",
          resource_type: "image",
        },
        (error, result) => {
          if (error || !result) {
            reject(
              error ?? new Error("Cloudinary upload failed"),
            );
            return;
          }

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
          });
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  async delete(publicId: string): Promise<void> {
    const result = await cloudinary.uploader.destroy(publicId);

    if (
      result.result !== "ok" &&
      result.result !== "not found"
    ) {
      throw new Error(
        `Cloudinary delete failed: ${result.result}`,
      );
    }
  }
}
