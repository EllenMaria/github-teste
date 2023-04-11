import { Link } from "react-router-dom";
import { VscLocation } from "react-icons/vsc";
export const Profile = ({ profile, stars }) => {

  const {avatar_url, name, bio, login, followers, following, company, location, email, twitter_username, blog} = profile;


  return <aside>
    <img src={avatar_url} />
    <h1>{name}</h1>
    <h2>@{login}</h2>
    <p>{bio}</p>
    <div className="social-statics">
      <h3>{followers}</h3>
      <h3>{following}</h3>
      <h3>{stars}</h3>
    </div>
    <div className="info-details">
      <h3>{company}</h3>
      <h3><VscLocation />{location}</h3>
      <h3>{blog}</h3>
      <Link to={blog} target="_blank">{blog}</Link>
      <Link to={`https://twitter.com/${twitter_username}`} target="_blank">{twitter_username}</Link>
      <h3>{email}</h3>
    </div>
  </aside>;
};
