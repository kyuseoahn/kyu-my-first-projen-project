import { App, Stack } from 'aws-cdk-lib';
import { S3Bucket } from './index';

const app = new App();

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

const stack = new Stack(app, 'my-s3-bucket-stack', { env });

new S3Bucket(stack, 'my-s3-bucket-stack', {
  bucketName: 'asimpletestbucket12345',
  readAccess: false,
});
