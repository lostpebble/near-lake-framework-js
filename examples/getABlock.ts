import * as dotenv from 'dotenv'
import { S3Client } from "@aws-sdk/client-s3";
import { fetchStreamerMessage, types } from "../src/index";
import { waitForever } from "./utils";
import { EPropertyNamingFormat } from "../src/types";

dotenv.config();

const config: types.LakeConfig = {
  s3BucketName: "near-lake-data-mainnet",
  s3RegionName: "eu-central-1",
  startBlockHeight: 78135436,
};

const s3Client = new S3Client({
  region: config.s3RegionName,
  endpoint: config.s3Endpoint,
  forcePathStyle: config.s3ForcePathStyle,
});

async function getBlockData(blockHeight: number): Promise<types.StreamerMessage> {
  return fetchStreamerMessage(s3Client, config.s3BucketName, config.startBlockHeight, EPropertyNamingFormat.native);
}

async function run() {
  const blockData = await getBlockData(config.startBlockHeight);
  console.log(blockData);
}

run();

waitForever();
