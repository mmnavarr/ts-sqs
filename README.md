# SQS Sender & Receiver Project

## About
This project includes products: An SQS `receiver` and an SQS `sender`. The `receiver` can be used as a standalone application consuming from an SQS queue (local and remote) whereas the `sender` must be run against the local ElasticMQ docker image.

ElasticMQ is a message queue system, offering an actor-based Scala and an SQS-compatible REST (query) interface. It runs in-memory and is extremely performant. For these reasons, it's the perfect way to locally publish SQS-compatible messages for development and testing purposes.

## How To Publish SQS Messages Locally
Run the following commands to build and run an ElasticMQ instance:
```
$ docker build -t sqs-mock ElasticMQ/.

$ docker run --name sqs-mock -p 9324:9324 -d sqs-mock
```

### Start SQS Receiver (Optional)
You can either run your own receiver (consumer) against the `localhost:9324` SQS Queue or use this simple one running on NodeJS. To run the one in this project, simple execute the following:
```
$ npm run start-receiver
```


### Start SQS Sender
The sender sends one mock message. Change the `MessageBody` field to send different message bodies!
```
$ npm run start-sender
```
