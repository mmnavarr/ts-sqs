import { Consumer } from "sqs-consumer";
import AWS from "aws-sdk";

// AWS config/url
import { sqsConfig, sqsQueue } from "./AWSConfig";

// Update config
AWS.config.update(sqsConfig);

// SQS consumer app
const app = Consumer.create({
  queueUrl: sqsQueue,
  handleMessage: async (message) => {
    // Do some work with `message`
    console.log("message", message)
  }
});

app.on("error", (error) => void console.error(error.message));

app.on("processing_error", (error) => void console.error(error.message));

app.start();

console.log("Listening....");