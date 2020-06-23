import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
export class GithubApiService {

    //declaring call back fucntion as argument
    getUserInfo(userName: string, cb: (user: User) => any) {
        //a rest API call using request module
        request.get("https://api.github.com/users/" + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            //execute the call back function
            cb(user);

        });
    }
    getRepos(userName: string, cb: (repoArray: Repo[]) => any) {
        //a rest API call using request module
        request.get("https://api.github.com/users/" + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            //use the map fucntion to convert each instance into a Repo and create Array out of it.
            let repoArray: Repo[] = body.map((repo: any) => new Repo(repo));
            //execute the call back function
            cb(repoArray);

        });
    }
}
