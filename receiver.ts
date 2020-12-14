import { Consumer } from "sqs-consumer";
import AWS from "aws-sdk";

// AWS config/url
import { sqsConfig, sqsUrl } from "./AWSConfig";

// Update config
AWS.config.update(sqsConfig);

// SQS consumer app
const app = Consumer.create({
  queueUrl: sqsUrl + "/queue/first-queue",
  handleMessage: async (message) => {
    // Do some work with `message`
    console.log("message", message)
  }
});

app.on("error", (error) => void console.error(error.message));

app.on("processing_error", (error) => void console.error(error.message));

app.start();