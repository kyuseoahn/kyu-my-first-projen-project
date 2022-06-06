import { RemovalPolicy } from 'aws-cdk-lib';
import { Bucket, BlockPublicAccess, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { NagSuppressions } from 'cdk-nag';
import { Construct } from 'constructs';

/*
A Simple S3 Construct
*/

export interface S3BucketProps {

  /**
   *
   * A unique bucket name.
   * @type {string}
   * @memberof S3BucketProps
   */
  readonly bucketName: string;


  /**
   *
   * Determines if the bucket is created as readOnly.
   * @default false
   * @type {boolean}
   * @memberof S3BucketProps
   */
  readonly readAccess: boolean;
}


export class S3Bucket extends Construct {
  constructor(scope: Construct, id: string, props: S3BucketProps) {
    super(scope, id);

    const bucket = new Bucket(this, 'SimpleTestBucket', {
      bucketName: props.bucketName,
      publicReadAccess: props.readAccess || false,
      removalPolicy: RemovalPolicy.DESTROY,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL, /* Remediates AwsSolutions-S2 */
      encryption: BucketEncryption.S3_MANAGED, /* Remediates AwsSolutions-S3 */
      enforceSSL: true, /* Remediates AwsSolutions-S10 */
    });

    NagSuppressions.addResourceSuppressions(bucket, [
      {
        id: 'AwsSolutions-S1', reason: 'S3 Bucket server access logs are not required for this workshop',
      },
    ]);
  }
}
