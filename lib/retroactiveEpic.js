require('probot');
const axios = require('axios');
const createJWT = require('./jwt.js');
const setEpic = require('./sprintEpic');

/**
 * Check issues to see if they have already been added to an epic - if not, add it to the most recent one.
 */

module.exports = async function checkRetroEpic(context) {

    let token = await createJWT();
    let instance = axios.create({
        baseURL: 'https://api.github.com/',
        timeout: 10000,
        headers: {
          authorization: `bearer ${token}`,
          accept: 'application/vnd.github.machine-man-preview+json'
        }
    });

    try {

        // get a list of open issues in the repo
        const issue_response = await instance.get('repos/' + process.env.REPO_OWNER + '/' + process.env.REPO_NAME + '/issues');
        const issues = issue_response["data"];

        //for each open issue, check to see if it's in an epic already.
        for (let i in issues) {



        }

        return true;
    } catch (err) {
        console.log(err);
        throw Error(`Unable to check which tickets need a response: ${err}`);
    }
};
