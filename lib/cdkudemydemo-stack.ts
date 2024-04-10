import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline , CodePipelineSource , ShellStep} from 'aws-cdk-lib/pipelines';

export class CdkudemydemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Code Pipeline
    const demopipeline = new CodePipeline(this, 'demo-aws-pipeline',
    {
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('Yeswanth00/udemy-cdk', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });
  }
}


