import { Aspects, Stack } from 'aws-cdk-lib';
import { Annotations, Match, Template } from 'aws-cdk-lib/assertions';
import { AwsSolutionsChecks } from 'cdk-nag';
import { S3Bucket } from '../src/index';


describe('Construct configuration', () => {
  test('creates an S3 bucket', () => {
    const stack = new Stack();
    new S3Bucket(stack, 'S3Bucket', {
      bucketName: 'simpletestbucket1234',
      readAccess: false,
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::S3::Bucket', {});
  });
});

describe('cdk-nag AwsSolutions Pack', () => {
  const stack = new Stack();
  new S3Bucket(stack, 'S3Bucket', {
    bucketName: 'simpletestbucket1234',
    readAccess: false,
  });
  Aspects.of(stack).add(new AwsSolutionsChecks());

  test('No unsuppressed Warnings', () => {
    const warnings = Annotations.fromStack(stack).findWarning(
      '*',
      Match.stringLikeRegexp('AwsSolutions-.*'),
    );
    expect(warnings).toHaveLength(0);
  });

  test('No unsuppressed Errors', () => {
    const warnings = Annotations.fromStack(stack).findError(
      '*',
      Match.stringLikeRegexp('AwsSolutions-.*'),
    );
    expect(warnings).toHaveLength(0);
  });
});
