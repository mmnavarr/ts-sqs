import AWS, { SQS } from "aws-sdk";

// AWS config & url
import { sqsConfig, sqsQueue, sqsUrl } from "./AWSConfig";

// Update config
AWS.config.update(sqsConfig);

// Create SQS sender instance
const sqs = new SQS({
  endpoint: sqsUrl,
  apiVersion: "latest"
});

const params = {
  // Remove DelaySeconds parameter and value for FIFO queues
  DelaySeconds: 2,
  MessageAttributes: {
    "Title": {
      DataType: "String",
      StringValue: "The Whistler"
    },
    "Author": {
      DataType: "String",
      StringValue: "John Grisham"
    },
    "WeeksOn": {
      DataType: "Number",
      StringValue: "6"
    }
  },
  MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016!",
  // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
  // MessageGroupId: "Group1",  // Required for FIFO queues
  QueueUrl: sqsQueue
};


(async () => {
  const queues = await sqs.listQueues().promise();
  console.log(queues);

  // Send message with 2 second delay
  const response = await sqs.sendMessage(params).promise();
  console.log(`Message sent: ${JSON.stringify(response)}`);
})();