# dusk-protos

# How to push

GIT_SSH_COMMAND="ssh -i ./.ssh/key_personal_rsa" git push origin develop

## How to setup from scratch?

Since this is going to be used as a published package on the Github, it needs to be published to npm and linked to github.
This will help to just use it as an npm package, within the scope of this project whereever needed. Hence, any changes done in the protos can be automatically updated in the packages using it.

- Create a user account on npm registry and generate its `ACCESS_TOKEN / PAT`
- Create a github account (if doesnt exist) and generate its `PAT / ACCESS_TOKEN` with `write:repo` rights

- Use the link to Create the github workflow: https://docs.github.com/en/packages/quickstart

###

Proto files for the dusk project
