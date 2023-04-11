import useAxios from "../../hooks/useAxios";
import { githubInstance } from "../../api/config";
import { useNavigate, useParams } from "react-router-dom";
import { Profile, Loading, Repository } from "../../components";
import { Skeleton } from "../../components/repository/skeleton";

export const Perfil = () => {

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/");
  };

  const { username } = useParams();
 
  const [profile, loadingProfile] = useAxios({
    axiosInstance: githubInstance,
    method: "get",
    url: `${username}`,
  });

  const [repositories, loadingRepo] = useAxios({
    axiosInstance: githubInstance,
    method: "get",
    url: `${username}/repos`,
  });

  let countStars = 0;
  repositories.map(item => countStars += item.stargazers_count)


  console.log(username);
  console.log(profile);

  if (loadingProfile) return <Loading />;
  if (loadingRepo) return <Skeleton />;

 const repoFilter = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count)
 
  function renderRepo() {
    if (repositories.length === 0) {
      return <p>{username} doesn’t have any public repositories yet.</p>;
    } else {
      return repoFilter.map((repo) => {
        return <Repository repo={repo} key={repo.id} />;
      });
    }
  }

  return (
    <div>
      <button onClick={navigation}>Voltar</button>
      <Profile profile={profile} stars={countStars} />
      {renderRepo()}
    </div>
  );
}
