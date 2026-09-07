import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BaserowClient {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  private get baseUrl(): string {
    return this.configService.getOrThrow<string>(
      "BASEROW_API_URL",
    );
  }

  private get token(): string {
    return this.configService.getOrThrow<string>(
      "BASEROW_API_TOKEN",
    );
  }

  private get tableId(): string {
    return this.configService.getOrThrow<string>(
      "BASEROW_TABLE_ID",
    );
  }

  async getRows() {
    const response = await fetch(
      `${this.baseUrl}/api/database/rows/table/${this.tableId}/`,
      {
        headers: {
          Authorization: `Token ${this.token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Baserow request failed: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  }

  async getRow(MemberId: string) {
    const response = await fetch(
      `${this.baseUrl}/api/database/rows/table/${this.tableId}/${MemberId}/`,
      {
        headers: {
          Authorization: `Token ${this.token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Baserow request failed: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  }

  async createRow(data: Record<string, unknown>) {
    const response = await fetch(
      `${this.baseUrl}/api/database/rows/table/${this.tableId}/`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${this.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
        const errorBody = await response.text();

        console.error("Baserow error response:", errorBody);

        throw new Error(
          `Baserow request failed: ${response.status} ${response.statusText}`,
        );
      }


    return response.json();
  }

  async updateRow(
    MemberId: string,
    data: Record<string, unknown>,
  ) {
    const response = await fetch(
      `${this.baseUrl}/api/database/rows/table/${this.tableId}/${MemberId}/`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Token ${this.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Baserow request failed: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  }

  async deleteRow(MemberId: string) {
    const response = await fetch(
      `${this.baseUrl}/api/database/rows/table/${this.tableId}/${MemberId}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Token ${this.token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Baserow request failed: ${response.status} ${response.statusText}`,
      );
    }

    return {
      message: "Member deleted successfully",
    };
  }
}
