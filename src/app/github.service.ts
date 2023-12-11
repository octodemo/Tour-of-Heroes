// This is a GitHub service that will be used to fetch data from GitHub API.
// The service imports Octokit, which is a GitHub API client for JavaScript.
// We have three methods in this service:
// 1. getOrgDetails(org) - This method will fetch the organization details from GitHub API.
// 2. getOrgMembers(org) - This method will fetch the organization members from GitHub API.
// 3. getRepoDetails(repoUrl) - This method will fetch the repository details from GitHub API.

import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private octokit: Octokit) { }

  getOrgDetails(org: string) {
    return this.octokit.orgs.get({ org });
  }

  getOrgMembers(org: string) {
    return this.octokit.orgs.listMembers({ org });
  }

  getRepoDetails(repoUrl: string) {
    const [org, repo] = repoUrl.split('/');
    return this.octokit.repos.get({ owner: org, repo });
  }

  getUserDetails(username: string) {
    return this.octokit.users.getByUsername({ username });
  }
}