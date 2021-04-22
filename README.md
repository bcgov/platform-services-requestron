# requestron

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app to handle DevOps requests

Requestron currently lives in the RocketChat namespaces (project set 6e2f55).

## Usage Requirements

There are several assumptions made by the bot about the way tickets must be set up in order to operate properly.

1. The tickets must be tracked through Zenhub and the bot must have an appropriate auth token for accessing the correct board.
2. There should be a tracking epic with the `ops-controller` label in the `developer-experience` repo. 
If either of these things are not true, new devops-requests tickets will not be added to the epic.
3. The bot differentiates between ticket types based on labels. Do not mess with the labels in `devops-requests` 
without first speaking with the Platform Services team.


## Manual Installation Instructions (here while I move to a different pipeline)

To install into test:
```
oc apply -f operations/deployment/secrets/test.yaml -n 6e2f55-test
oc process -f operations/deployment/bc.yaml --param-file=operations/deployment/test.param --ignore-unknown-parameters | oc apply -f - -n 6e2f55-test
oc process -f operations/deployment/dc.yaml --param-file=operations/deployment/test.param --ignore-unknown-parameters | oc apply -f - -n 6e2f55-test
```

To install into production:
```
oc apply -f operations/deployment/secrets/prod.yaml -n 6e2f55-prod
oc process -f operations/deployment/bc.yaml --param-file=operations/deployment/prod.param --ignore-unknown-parameters | oc apply -f - -n 6e2f55-prod
oc process -f operations/deployment/dc.yaml --param-file=operations/deployment/prod.param --ignore-unknown-parameters | oc apply -f - -n 6e2f55-prod
```


## Contributing

If you have suggestions for how requestron could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

Apache License
