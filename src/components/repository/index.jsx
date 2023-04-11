export const Repository = ({ repo }) => {

  const {name, description, stargazers_count, updated_at } = repo;

  const updated = updated_at.substring(0, 10);
  const givenDate = new Date(updated);
  const days = Math.ceil((Date.now() - givenDate) / (1000 * 60 * 60 * 24));
  const timeAgo = days >= 30 ? `${Math.floor(days / 30)} months` : `${days} days`;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{stargazers_count}</h3>
      <h3>Updated {timeAgo} ago</h3>
    </div>
  );
};
