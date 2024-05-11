require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const githubData = {
  login: "manjilkoirala",
  id: 85267300,
  node_id: "MDQ6VXNlcjg1MjY3MzAw",
  avatar_url: "https://avatars.githubusercontent.com/u/85267300?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/manjilkoirala",
  html_url: "https://github.com/manjilkoirala",
  followers_url: "https://api.github.com/users/manjilkoirala/followers",
  following_url:
    "https://api.github.com/users/manjilkoirala/following{/other_user}",
  gists_url: "https://api.github.com/users/manjilkoirala/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/manjilkoirala/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/manjilkoirala/subscriptions",
  organizations_url: "https://api.github.com/users/manjilkoirala/orgs",
  repos_url: "https://api.github.com/users/manjilkoirala/repos",
  events_url: "https://api.github.com/users/manjilkoirala/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/manjilkoirala/received_events",
  type: "User",
  site_admin: false,
  name: "Manjil Koirala",
  company: "Tech Learn Here",
  blog: "https://manjilkoirala.info.np",
  location: "Itahari, Nepal",
  email: null,
  hireable: null,
  bio: "Developer/YouTuber.",
  twitter_username: "manjilhere",
  public_repos: 38,
  public_gists: 0,
  followers: 22,
  following: 9,
  created_at: "2021-06-03T02:16:41Z",
  updated_at: "2024-04-18T12:05:12Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Manjil Koirala");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is Login</h1>");
});

app.get("/manjil", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
