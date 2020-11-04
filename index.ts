import { Consumer } from "sqs-consumer";
import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
  // accessKeyId: "",
  // secretAccessKey: ""
});

const app = Consumer.create({
  queueUrl: "https://sqs.us-east-1.amazonaws.com/XYZ/abc",
  handleMessage: async (message) => {
    // Do some work with `message`
    console.log("message", message)
  }
});

app.on("error", (error) => console.error(error.message));

app.on("processing_error", (error) => console.error(error.message));

app.start();