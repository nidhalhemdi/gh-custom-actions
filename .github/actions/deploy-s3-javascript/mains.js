/* 1. cd to this folder 
   2. run `npm init -y` to create a package.json file
   3. run `npm install @actions/core @actions/github @actions/exec` to install dependencies
*/

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello from deploy-s3-javascript action!'); // Logs a notice message to the GitHub Actions log
}

run();