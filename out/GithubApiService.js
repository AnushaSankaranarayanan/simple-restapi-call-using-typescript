"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    //declaring call back fucntion as argument
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            //execute the call back function
            cb(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName + '/repos', OPTIONS, function (error, response, body) {
            //use the map fucntion to convert each instance into a Repo and create Array out of it.
            var repoArray = body.map(function (repo) { return new Repo_1.Repo(repo); });
            //execute the call back function
            cb(repoArray);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
