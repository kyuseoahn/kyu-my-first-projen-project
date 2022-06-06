const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'kyuseo',
  author
  authorAddress: 'kyuseo@amazon.com',
  cdkVersion: '2.21.0',
  defaultReleaseBranch: 'main',
  name: 'kyu-my-first-projen-project',
  repositoryUrl: 'https://github.com/kyuseo/kyu-my-first-projen-project.git',

  devDeps: ['aws-cdk-lib',
    'jsii-pacmak'], /* Build dependencies for this module. */
  deps: ['cdk-nag@^2.0.0'], /* Runtime dependencies of this module. */
  majorVersion: 1,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
const exclusions = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log'];
project.npmignore.exclude(...exclusions);
project.gitignore.exclude(...exclusions);
project.synth();