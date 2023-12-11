import { TestBed } from '@angular/core/testing';
import { Octokit } from '@octokit/rest';

import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let octokit: Octokit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubService);
    octokit = TestBed.inject(Octokit);
  });

  it('should call octokit.users.getByUsername with the provided username', () => {
    const username = 'testuser';
    const getByUsernameSpy = spyOn(octokit.users, 'getByUsername');

    service.getUserDetails(username);

    expect(getByUsernameSpy).toHaveBeenCalledWith({ username });
  });
});