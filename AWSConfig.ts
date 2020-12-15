import { ConfigurationOptions } from "aws-sdk";

const sqsConfig: ConfigurationOptions = {
  region: "us-east-1",
  accessKeyId: "N/A",
  secretAccessKey: "N/A"
}

const sqsUrl: string = "http://localhost:9324";
const sqsQueue: string = `${sqsUrl}/queue/main-queue`;

export { sqsConfig, sqsUrl, sqsQueue };