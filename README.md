# Job posting board Cuvette Assignment

This is a MEARN stack web application.


## Project Structure

- **client**: React frontend
- **server**: Node.js backend

#1#Setting up the server
cd server
npm install

The server uses JWT for authentication. Make sure you install the following:
-npm install jsonwebtoken bcryptjs
-jsonwebtoken: For generating and verifying tokens.
-bcryptjs: For hashing passwords.



#2#Setting up the client
cd ../client
npm install


#3#Configure environment variables
DB = 'mongodb://localhost:27017/companyregistration1'
PORT=8080
JWTPRIVATEKEY = jsonwebtoken


#4#Running the server and client
cd ../server
npm start
cd ../client
npm start

#5#Authentication Details
JWT (JSON Web Token) is used for secure authentication. Tokens are issued when users log in and are used to protect routes on the server.
bcrypt is used to hash user passwords before storing them in the database for security.


#6#Additional Information
The server runs on port 8080 by default.
The client runs on port 3000 by default.
