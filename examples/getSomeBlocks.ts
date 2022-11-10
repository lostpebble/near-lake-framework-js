import * as dotenv from 'dotenv'

dotenv.config()
import { startStream, types } from "../src";

const lakeConfig: types.LakeConfig = {
  s3BucketName: "near-lake-data-mainnet",
  s3RegionName: "eu-central-1",
  startBlockHeight: 78135435,
};

startStream(lakeConfig, async (data, ctx) => {
  console.log(data);
  ctx.stopStream();
})

const wait = () => new Promise((resolve) => {
  setTimeout(resolve, 1000);
});

async function waitForever() {
  while (true) {
    await wait();
  }
}

waitForever();
