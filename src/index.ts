import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash';

var svc = new GithubApiService();
//get the user info by making a rest API call using request module
svc.getUserInfo("jtleek", (user: User) => {
    //call repos of the user
    svc.getRepos("jtleek", (repoArray: Repo[]) => {
        //sort the repos using lodash
        let sortedRepos = _.orderBy(repoArray , ['forkCount'],['desc']);
        //choose the first 5 elements using lodash
        let top5Repos = _.take(sortedRepos,5);
        user.repos = top5Repos;
        console.log(user);
    });
});

console.log("Hello");