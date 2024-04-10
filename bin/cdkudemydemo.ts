#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkudemydemoStack } from '../lib/cdkudemydemo-stack';

const app = new cdk.App();
new CdkudemydemoStack(app, 'CdkudemydemoStack', {
  env : { account : '471112643910' , region: 'us-west-2' },
});
  
