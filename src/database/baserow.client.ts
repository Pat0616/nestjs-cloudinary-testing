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

  async getRow(id: number) {
    const response = await fetch(
      `${this.baseUrl}/api/database/rows/table/${this.tableId}/${id}/`,
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
      throw new Error(
        `Baserow request failed: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  }

  async updateRow(
    id: number,
    data: Record<string, unknown>,
  ) {
    const response = await fetch(
      `${this.baseUrl}/api/database/rows/table/${this.tableId}/${id}/`,
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

  async deleteRow(id: number) {
    const response = await fetch(
      `${this.baseUrl}/api/database/rows/table/${this.tableId}/${id}/`,
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
