import { test as baseTest } from '@playwright/test';
import { readTestData } from '../src/common/testHelper';
import { log } from '../src/common/logger';

type TestFixtures = {
  testData: any;
  loginPayload: { username: string; password: string } | null;
};

export const test = baseTest.extend<TestFixtures>({
  testData: async ({}: any, use: (arg0: any) => any) => {
    const data = readTestData('user.json');
    await use(data);
  },

  loginPayload: async ({ testData }, use) => {
    const payload = testData?.login || null;
    await use(payload);
  }
});

export const expect = test.expect;
