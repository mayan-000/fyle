import { useEffect, useRef, useState } from "react";
import "./App.css";
import { getRepositories, getUser } from "./services/API";
import Input from "@mui/material/Input";
import {
  Button,
  CircularProgress,
  LinearProgress,
  Pagination,
} from "@mui/material";
import UserProfile from "./components/UserProfile";
import UserRepositories from "./components/UserRepositories";

function App() {
  const [userName, setUserName] = useState<string>();
  const [profile, setProfile] = useState<USER>();
  const [repos, setRepos] = useState<REPOS>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageChange, setPageChange] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const totalPages = useRef<number>(0);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setTouched(true);
        const result = await Promise.all([
          getUser(userName || ""),
          getRepositories(userName || "", 1),
        ]);
        totalPages.current = parseInt("" + (result[0].public_repos + 5) / 6);

        setProfile(result[0]);
        setRepos(result[1]);
      } catch (error) {
        setTouched(false);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (userName) {
      getData();
    }
  }, [userName]);

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    setUserName(e.target[0].value);
  };

  const pageChangeHandler = async (e: any, value: number) => {
    setPageChange(true);
    const result = await getRepositories(userName || "", value);

    setRepos(result);
    setPageChange(false);
  };

  return (
    <div className="m-4 p-3">
      <header className="d-flex justify-content-between p-4 bg-light rounded">
        <h1>Enter Github Username</h1>

        <form onSubmit={formSubmitHandler}>
          <Input className="mx-4" placeholder="Enter Username" />
          <Button type="submit" variant="contained">
            Search User
          </Button>
        </form>
      </header>

      {touched ? (
        loading ? (
          <div className="d-flex justify-content-center align-items-center vh-50">
            <CircularProgress size={"100px"} />
          </div>
        ) : (
          <>
            <UserProfile profile={profile} />

            {pageChange ? (
              <div className="m-5 p-5">
                <LinearProgress />
              </div>
            ) : (
              <UserRepositories repos={repos} userName={userName} />
            )}

            {totalPages.current !== 0 && (
              <Pagination
                count={totalPages.current}
                onChange={(e, v) => {
                  pageChangeHandler(e, v);
                }}
                color="primary"
              />
            )}
          </>
        )
      ) : (
        <h1 className="display-4 m-5 p-5 text-center">
          {!notFound
            ? "Enter Github Username to get info about Github User"
            : "Github User not Found!"}
        </h1>
      )}
    </div>
  );
}

export default App;
