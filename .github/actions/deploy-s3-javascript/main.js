/* 1. cd to this folder 
   2. run `npm init -y` to create a package.json file
   3. run `npm install @actions/core @actions/github @actions/exec` to install dependencies
*/

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {

    // 1) Get some input values
    
    const bucketName = core.getInput('bucket-name', { required: true }); // getting an input value defined in action.yml
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files to S3 using AWS CLI
    
    const s3Uri = `s3://${bucketName}`;
    const command = `aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`;
    exec.exec(command);

    // 3) Set the output value for the deployed URL
    
    const deployedUrl = `http://${bucketName}.s3-website.${bucketRegion}.amazonaws.com`;
    core.setOutput('deployed-url', deployedUrl);


    // Logs a notice message to the GitHub Actions log
    // core.notice('Hello from deploy-s3-javascript action!'); 
}

run();