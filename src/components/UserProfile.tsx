import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";

type UserProfileProps = {
  profile: USER | undefined;
};

const UserProfile: React.FC<UserProfileProps> = ({ profile }): JSX.Element => {
  return (
    <>
      <div className="my-3 d-flex gap-5">
        <img
          className="rounded-circle w-25"
          src={profile?.avatar_url}
          loading="lazy"
        />

        <div className="mt-4">
          <h1 className="text-primary mb-4">
            {profile?.name || "Github User"}
          </h1>

          <p>
            <InfoIcon className="mx-1" />
            {profile?.bio || "Not Found!"}
          </p>

          <p>
            <LocationOnIcon className="mx-1" />
            {profile?.location || "Not Available!"}
          </p>

          <p>
            <TwitterIcon className="mx-1" />
            {profile?.twitter_username ? (
              <a
                href={`https://twitter.com/${profile?.twitter_username}`}
                target="_blank"
              >
                {profile?.twitter_username}
              </a>
            ) : (
              "Not Found!"
            )}
          </p>

          <p>
            <GitHubIcon className="mx-1" />
            <a href={profile?.html_url} target="_blank">
              {profile?.name || "Github User"}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
