import React from "react";
import UserRepository from "./UserRepository";

type UserRepositoriesProps = {
  repos: REPOS | undefined;
  userName: string | undefined;
};

const UserRepositories: React.FC<UserRepositoriesProps> = ({
  repos,
  userName,
}): JSX.Element => {
  return (
    <div className="stack-repos"> 
      {repos?.map((repo, index) => (
        <React.Fragment key={index}>
          <UserRepository repo={repo} userName={userName} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserRepositories;
