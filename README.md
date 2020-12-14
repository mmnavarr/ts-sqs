# TypeScript SQS Sender & Receiver Project

## How to Run
ElasticMQ is a message queue system, offering an actor-based Scala and an SQS-compatible REST (query) interface. ElasticMQ  can mock AmazonSQS and we are using it locally in a docker container.

### Start ElasticMQ Docker Container

```
$ docker build -t sqs-mock .

$ docker run --name sqs-mock -p 9324:9324 -d sqs-mock
```

### Start SQS Receiver
```
$ npm run start-receiver
```


### Start SQS Sender
The sender sends one mock message.
```
$ npm run start-sender
```
