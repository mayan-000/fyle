declare global {
  type USER = {
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    location: string;
    twitter_username: string;
    public_repos: number;
  };

  type REPO = {
    name: string;
    description: string;
    html_url: string;
  };

  type REPOS = REPO[];
}

export {};
