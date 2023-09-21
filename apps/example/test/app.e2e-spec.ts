import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HYDRA_CLIENT_TOKEN, HydraClient } from '@sketchmonk/nest-hydra/dist/lib/hydra.providers';

import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('hydra-nest', async () => {
    // test for providers existence
    const hydraClient = app.get<HydraClient>(HYDRA_CLIENT_TOKEN);
    expect(hydraClient).toBeDefined();
    expect(hydraClient).toHaveProperty('metadata');
    expect(hydraClient).toHaveProperty('oauth2');
    expect(hydraClient).toHaveProperty('jwk');
    expect(hydraClient).toHaveProperty('oidc');
    expect(hydraClient).toHaveProperty('wellKnown');
  });
});
