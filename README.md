# Arthera Docs

Live at: [https://docs.arthera.net](https://docs.arthera.net)

We're using [Docusaurus 2](https://docusaurus.io/).

## Install

```
yarn
```

## Run

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Contribute

If you see anything that could be improved, you can either send us a message via Telegram ([https://t.me/artherachain](https://t.me/artherachain)), or make your own pull request.

If you want to make your own pull request to this repository, please follow these steps: 

- Create a new issue
- Create a branch from this issue
- Edit the code
- Create a pull request

We will review it and you'll get notified about the status of the review (approved, commented, or rejected). 

### Deployment

Only the team can publish a new version.

#### Publish 

```
./upload-s3.sh
```

#### Alternatively 

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
