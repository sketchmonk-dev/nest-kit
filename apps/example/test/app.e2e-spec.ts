import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HYDRA_CLIENT_TOKEN, HydraClient } from '@sketchmonk/nest-hydra';
import { JwkApi, MetadataApi, OAuth2Api, OidcApi, WellknownApi } from '@ory/hydra-client';
import { Novu } from '@novu/node';
import { S3 } from '@aws-sdk/client-s3';

import { AppModule } from './../src/app.module';
import { NOVU_CLIENT_TOKEN } from '@sketchmonk/nest-novu';
import { S3_CLIENT_TOKEN } from '@sketchmonk/nest-s3';
import { WINSTON_LOGGER_TOKEN } from '@sketchmonk/nest-winston';
import { Logger } from 'winston';

describe('HydraModule', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('hydraClient', () => {
    // test for providers existence
    const hydraClient = app.get<HydraClient>(HYDRA_CLIENT_TOKEN);
    expect(hydraClient).toBeDefined();
    expect(hydraClient).toHaveProperty('metadata');
    expect(hydraClient).toHaveProperty('oauth2');
    expect(hydraClient).toHaveProperty('jwk');
    expect(hydraClient).toHaveProperty('oidc');
    expect(hydraClient).toHaveProperty('wellKnown');
  });

  it('metadataClient', () => {
    // test for providers existence
    const hydraClient = app.get<HydraClient>(HYDRA_CLIENT_TOKEN);
    expect(hydraClient.metadata).toBeDefined();
    expect(hydraClient.metadata).toBeInstanceOf(MetadataApi);
  });

  it('oauth2Client', () => {
    // test for providers existence
    const hydraClient = app.get<HydraClient>(HYDRA_CLIENT_TOKEN);
    expect(hydraClient.oauth2).toBeDefined();
    expect(hydraClient.oauth2).toBeInstanceOf(OAuth2Api);
  });

  it('jwkClient', () => {
    // test for providers existence
    const hydraClient = app.get<HydraClient>(HYDRA_CLIENT_TOKEN);
    expect(hydraClient.jwk).toBeDefined();
    expect(hydraClient.jwk).toBeInstanceOf(JwkApi);
  });

  it('oidcClient', () => {
    // test for providers existence
    const hydraClient = app.get<HydraClient>(HYDRA_CLIENT_TOKEN);
    expect(hydraClient.oidc).toBeDefined();
    expect(hydraClient.oidc).toBeInstanceOf(OidcApi);
  });

  it('wellKnownClient', () => {
    // test for providers existence
    const hydraClient = app.get<HydraClient>(HYDRA_CLIENT_TOKEN);
    expect(hydraClient.wellKnown).toBeDefined();
    expect(hydraClient.wellKnown).toBeInstanceOf(WellknownApi);
  });
});

describe('NovuModule', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init()
  });

  it('novu', () => {
    // test for providers existence
    const novu = app.get(NOVU_CLIENT_TOKEN);
    expect(novu).toBeDefined()
    expect(novu).toBeInstanceOf(Novu);
  });

})

describe('S3Module', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init()
  });

  it('s3', () => {
    // test for providers existence
    const s3 = app.get(S3_CLIENT_TOKEN);
    expect(s3).toBeDefined()
    expect(s3).toBeInstanceOf(S3);
  });

})

describe('WinstonModule', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init()
  });

  it('logger', () => {
    // test for providers existence
    const logger = app.get(WINSTON_LOGGER_TOKEN);
    expect(logger).toBeDefined();
    expect(logger).toBeInstanceOf(Logger);
  });

})