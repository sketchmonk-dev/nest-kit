import { Injectable } from '@nestjs/common';
import { HydraClient, InjectHydraClient } from '@sketchmonk/nest-hydra';

@Injectable()
export class AppService {
  constructor(@InjectHydraClient() private readonly hydra: HydraClient) {}

  /**
   * Get the version of hydra server
   * @returns The version of the hydra server
   */
  async getHydraVersion(): Promise<{ version?: string }> {
    const { data } = await this.hydra.metadata.getVersion();
    return data;
  }
}
