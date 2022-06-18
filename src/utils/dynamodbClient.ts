import { DynamoDB } from "aws-sdk";

const options = {
    region: "localhost",
    endpoint: "http://localhost:8000", // standard port for local dynamoDB
    accessKeyId: "x",
    secretAccessKey: "x",
}

const isOffline = () => {
    return process.env.IS_OFFLINE; // automatically set by serverless
}

export const document = isOffline() 
    ? new DynamoDB.DocumentClient(options) 
    : new DynamoDB.DocumentClient();