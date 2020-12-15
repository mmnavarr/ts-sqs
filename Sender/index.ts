import AWS, { SQS } from "aws-sdk";
import { SendMessageRequest } from "aws-sdk/clients/sqs";

// AWS config & url
import { sqsConfig, sqsQueue, sqsUrl } from "../AWSConfig";

// Update config
AWS.config.update(sqsConfig);

// Create SQS sender instance
const sqs = new SQS({
  endpoint: sqsUrl,
  apiVersion: "latest"
});

const message: SendMessageRequest = {
  // Remove DelaySeconds parameter and value for FIFO queues
  DelaySeconds: 2,
  // Enter serialized JSON for MessageBody value to publish messages
  MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016!",
  // Define the URL + queue to send to
  QueueUrl: sqsQueue
};


(async () => {
  // const queues = await sqs.listQueues().promise();
  // console.log(queues);

  // Send message
  const response = await sqs.sendMessage(message).promise();
  console.log(`Message sent! Message ID: ${response.MessageId}`);
})();