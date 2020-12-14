const sqsConfig = {
  region: "us-east-1",
  accessKeyId: "N/A",
  secretAccessKey: "N/A"
}

const sqsUrl = "http://localhost:9324";
const sqsQueue = `${sqsUrl}/queue/main-queue`;

export { sqsConfig, sqsUrl, sqsQueue };