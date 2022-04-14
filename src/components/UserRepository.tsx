import { Chip, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { getLanguage } from "../services/API";

type UserRepositoryProps = {
  repo: REPO | undefined;
  userName: string | undefined;
};

const UserRepository: React.FC<UserRepositoryProps> = ({
  repo,
  userName,
}): JSX.Element => {
  const [languages, setLanguages] = useState<string[]>();

  useEffect(() => {
    getLanguage(userName || "", repo?.name || "").then((languages) => {
      setLanguages(languages);
    });
  }, [repo?.name, userName]);

  return (
    <>
      <div className="border border-2 border-dark d-flex flex-column justify-content-between">
        <h2 className="text-info wb text-wrap">
          {repo?.name}

          <a className="float-end" href={repo?.html_url} target="_blank">
            <LaunchIcon />
          </a>
        </h2>

        <p className="wb">{repo?.description}</p>

        {languages ? (
          <div>
            {languages.map((language, index) => (
              <Chip
                key={index}
                className="m-1"
                label={language}
                color="primary"
              />
            ))}
          </div>
        ) : (
          <LinearProgress />
        )}
      </div>
    </>
  );
};

export default UserRepository;
