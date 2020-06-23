"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repoResponse) {
        this.name = repoResponse.name;
        this.description = repoResponse.description;
        this.url = repoResponse.html_url;
        this.size = repoResponse.size;
        this.forkCount = repoResponse.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
