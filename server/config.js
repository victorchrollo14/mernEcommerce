import "dotenv/config";

const NODE_ENV = process.env.NODE_ENV;
let corsUrls = [];
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

console.log(MONGODB_URI, JWT_PRIVATE_KEY, CLIENT_ID, CLIENT_SECRET);

if (NODE_ENV === "production") {
  const CLIENT_URL1 = process.env.CLIENT_URL1;
  const CLIENT_URL2 = process.env.CLIENT_URL2;

  corsUrls.push(CLIENT_URL1);
  corsUrls.push(CLIENT_URL2);
} else if (NODE_ENV === "development") {
  const local_client = "http://localhost:3000";
  corsUrls.push(local_client);
}

console.log(corsUrls);

export { MONGODB_URI, JWT_PRIVATE_KEY, CLIENT_ID, CLIENT_SECRET, corsUrls };
