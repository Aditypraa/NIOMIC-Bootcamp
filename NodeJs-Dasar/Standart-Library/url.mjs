import { URL } from "url";

const youtubePzn = new URL(
  "https://www.youtube.com/watch?v=b39Xqf5iyjo&t=8842s"
);

// Menguabah URL
youtubePzn.host = "www.youtubeaja.com";
youtubePzn.searchParams.append("status", "Premium");

console.info(youtubePzn.toString());
console.info(youtubePzn.href);
console.info(youtubePzn.protocol);
console.info(youtubePzn.host);
console.info(youtubePzn.pathname);
console.info(youtubePzn.searchParams);
