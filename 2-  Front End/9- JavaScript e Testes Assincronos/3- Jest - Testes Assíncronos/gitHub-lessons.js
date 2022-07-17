const getUserReposUrl = (user) => `https://api.github.com/users/${user}`;

const getGitHubUserInfos = async (username) => {
  const url = getUserReposUrl(username);
  const result = await fetch(url);
  const data = await result.json();
  const { name, location, bio, company } = data;
  return { name, location, bio, company };
};

// getGitHubUserInfos("henriquejensen").then((data) => console.log(data));

module.exports = {
  getUserReposUrl,
  getGitHubUserInfos,
};