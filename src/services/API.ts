const baseURL = "https://api.github.com";

export async function getUser(userName: string): Promise<USER> {
  const result = await fetch(`${baseURL}/users/${userName}`, {
    headers: new Headers({ Accept: "application/vnd.github.v3+json" }),
  });
  if (result.status !== 200) throw "404";

  const resultJSON = await result.json();
  const user: USER = resultJSON;

  return user;
}

export async function getRepositories(
  userName: string,
  page: number
): Promise<REPOS> {
  const result = await fetch(
    `${baseURL}/users/${userName}/repos?page=${page}&per_page=6`,
    {
      headers: new Headers({ Accept: "application/vnd.github.v3+json" }),
    }
  );

  const resultJSON = await result.json();
  const repo: REPOS = resultJSON;

  return repo;
}

export async function getLanguage(
  userName: string,
  repo: string
): Promise<string[]> {
  // return ["JavaScript", "HTML", "CSS", "JavaScript", "HTML", "CSS"];
  const result = await fetch(`${baseURL}/repos/${userName}/${repo}/languages`, {
    headers: new Headers({ Accept: "application/vnd.github.v3+json" }),
  });

  const resultJSON = await result.json();
  const languages = Object.keys(resultJSON);

  return languages;
}
