# dusk-protos

## Setup and Summary

- This repo contains the `protos` to be used in the dusk project.
- The purpose of this repo is to act like a `package/library` to store `proto` files, build them, so they can be used by other services.
- As soon as a `push` to origin of `master` and `develop` is done, the `github-action` automatically runs and `publishes` the package to be utilised by the other services.

### Setting up protos

- In order to build the proto files, you need to have `prtoc` and `protobuff` installed and configured in your `path`.
- Once that is done, you can proceed to run the commented command in `build.sh`.

### Setting up publishing to git

- Since this is destined to be a git package, to be used with other libraries, it needs to have a `publish/release` `action` setup.
- For that, we have `.npmrc` setup in the code which has `github PAT` inside it. (ideally it should not be kept in the repo but this is just a demo)
- For the `release-package` which is a `github-workflow action`, we need `GITHUB_TOKEN`, which is usually already there on github ready to be used.
- In this workflow, we install `node` and `protoc` on the container. Then we install and `publish` to `registry.`

## Steps

- npm install
- if you want to build the proto files locally, install `protoc` and `prtobuff` and configure them in the `PATH` variable as well.
- do `npm run build`, or do `./build.sh` file (uncomment the commented script, that is to run locally)

## How to setup from scratch?

Since this is going to be used as a published package on the Github, it needs to be published to npm and linked to github.
This will help to just use it as an npm package, within the scope of this project whereever needed. Hence, any changes done in the protos can be automatically updated in the packages using it.

- Create a user account on npm registry and generate its `ACCESS_TOKEN / PAT`
- Create a github account (if doesnt exist) and generate its `PAT / ACCESS_TOKEN` with `write:repo` rights
- Use the link to Create the github workflow: https://docs.github.com/en/packages/quickstart
- Install and confgiure `prtoc` and `protobuff` in your `path`

## How to push

git config user.name "AmaarHassanCS"
git config user.email "amaarhassancs@gmail.com"
GIT_SSH_COMMAND="ssh -i ./.ssh/key_personal_rsa" git push origin develop
