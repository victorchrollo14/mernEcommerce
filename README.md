# Men's Tribe

Ecommerce App Built with the Mern Stack.

## Things to Learn While Building

* [ ] MicroServices Architecture (not using bcoz of complexity) ❌
* [ ] Azure - Deploying backend.
* [ ] mongoDB Atlas - deploy database
* [ ] vercel - Deploy frontend.
* [ ] OAuth for github and google Auth.
* [ ] Integrating External Api's like Strip and razorpay for payments, twilio for notifications.
* [ ] Testing (postman, jest, supertest, mongodb-memory-server) -> unit test + integration tests.

## Local Development

1. Fork the repository
2. Clone it on your local machine.

   ```
   git clone https://github.com/username/mernEcommerce.git
   ```
3. Start Backend

   ```
     cd mernEcommerce/server
     npm install
   ```

* create a .env file and add the your mongodb uri and other variables similar to .env.example

  ```
   touch .env
  ```
* To run the backend

  ```
   npm start
  ```

5. Start frontend

   ```
   cd mernEcommerce/client
   npm install
   ```

* create a .env file and add Github client and url similar to .env.example

  ```
  touch .env
  ```
* To Run the frontend

  ```
   npm run dev
  ```

6. To insert products data into the mongodb database
   ```
   cd server/src/utils/
   node insertData.js
   ```
