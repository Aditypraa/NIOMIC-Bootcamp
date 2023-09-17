import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs");
const result = zlib.gzipSync(source);

// Zlib Compress
fs.writeFileSync("zlib-compress.mjs.txt", result);

// console.info(result);
// console.info(result.toString());
