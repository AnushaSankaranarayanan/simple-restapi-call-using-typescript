"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
//get the user info
svc.getUserInfo("jtleek", function (user) {
    //call repos of the user
    svc.getRepos("jtleek", function (repoArray) {
        //sort the repos using lodash
        var sortedRepos = _.orderBy(repoArray, ['forkCount'], ['desc']);
        //choose the first 5 elements using lodash
        var top5Repos = _.take(sortedRepos, 5);
        user.repos = top5Repos;
        console.log(user);
    });
});
console.log("Hello");
