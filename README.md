# AWS SQS Consumer x Publisher

This project includes products: An SQS `consumer` and an SQS `publisher`. Both can be used as a standalone application consuming & publishing from an SQS queue (local and remote) but this repository will show you how to run it locally.

ElasticMQ is a message queue system, offering an actor-based Scala and an SQS-compatible REST (query) interface. It runs in-memory and is extremely performant. For these reasons, it's the perfect way to locally publish SQS-compatible messages for development and testing purposes.

## How To Consume/Publish SQS Messages Locally

### Prerequisites
1. Yarn (Install [Yarn](https://yarnpkg.com/getting-started/install)) or NPM
2. Docker (Install [Docker](https://docs.docker.com/get-docker/))

> The following script commands can all be run with `npm` instead of `yarn`.

### Start ElasticMQ
Run the following commands to build and run an ElasticMQ instance:
```
$ docker build -t sqs-mock ElasticMQ/.

$ docker run --name sqs-mock -p 9324:9324 -d sqs-mock
```

### Install Dependencies
Install the project deps in order to run the `consumer` and `publisher`.
```
$ yarn install
```

### Start SQS Consumer (Optional)
You can either run your own receiver (consumer) against the `localhost:9324` SQS Queue or use this simple one running on NodeJS. To run the one in this project, simple execute the following:
```
$ yarn run consumer
```

### Start SQS Publisher
The sender sends one an SQS message to the queue. The string value at the end of the script is what will be passed as the message body. For more complex messages, pass serialized JSON string value.
```
$ yarn run publisher "Message goes here!"
```
