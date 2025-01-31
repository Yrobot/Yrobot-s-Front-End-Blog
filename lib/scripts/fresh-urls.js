const { join } = require("path");
const fs = require("fs");

const { getAllPosts } = require("../api");
const config = require("../config");

const BASE_URL = config.baseUrl;

const BASE_PATH = join(__dirname, "../../");
const OUT_PATH = "_urls.txt";

const OUTPUT_PATH = join(BASE_PATH, OUT_PATH);

const urlsStr = getAllPosts()
  .map(({ url }) => `${BASE_URL}${url}`)
  .join("\n");

fs.writeFileSync(OUTPUT_PATH, `${BASE_URL}\n${urlsStr}`);
