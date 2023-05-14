**FelixWings**

Flying your business to new heights

FelixWings is a website that connects start-up founders and investors in a single platform. It is designed to provide a seamless experience for entrepreneurs looking for funding and investors searching for innovative start-ups to invest in. The website offers a range of services to facilitate communication and collaboration between founders and investors.

Through FelixWings, founders can pitch their ideas to potential investors, discuss their funding requirements, and receive feedback and advice from experienced investors. Investors can browse through a variety of start-up pitches and profiles, connect with founders who match their interests, and invest in innovative start-ups.

FelixWings provides a dynamic platform where founders and investors can share their ideas, connect with like-minded individuals, and build successful businesses. With a user-friendly interface, powerful search tools, and secure communication features, FelixWings makes it easy for founders and investors to collaborate and grow their businesses together.

To achieve this, I have made this website
Here we are having first landing page a login page where user have to first login with their valid email and password. 

**Below is the Screenshot for Login page:**
![LoginPage](https://github.com/SwapnilRajguru/FelixWing-Project/assets/114178229/eed17592-f7f1-4f30-8adf-1f61ff896211)


This password and email ID is validated with the existing data in the database.  
Password is encrypted before saving in database so that no one can see the original password of the user. For encryption we are using JWT authentication and salt to hash the password.
If the user is registered already then they can login directly and if the user is not found in database, then we are throwing an error saying “You are not registered user. Kindly register first” and then redirecting user to registration page.

for new user there is Registration page in which user can enter their name, email, mobile number and password as well as we have added check to confirm the entered password.
In case user enter a wrong mail id or wrong password then wrong password or invalid mail id message pop up on the screen. 
This entire website is connected to NoSQL database which is MongoDB. To Connect to Database, I have created app.js file were all validations are added.

**Below is the Screenshot for Registration page:** 
![RegisterPage](https://github.com/SwapnilRajguru/FelixWing-Project/assets/114178229/0ef1b8b8-584c-4f19-8d23-6c2543fe46a4)


**Below is the Screenshot of User saved in database:**
![MongoDb](https://github.com/SwapnilRajguru/FelixWing-Project/assets/114178229/b43e4dd3-1ec4-494e-a1b7-059d0502c5d1)


Once user logged in successfully they are landed on the homepage where user can see details about founder/ investors etc.

**Below is the Screenshot of HomePage:**
![HomePage](https://github.com/SwapnilRajguru/FelixWing-Project/assets/114178229/4f52a91e-286b-42fa-836d-8dd8eca7433e)


As well as we are having Contact us page as where user have to add name, email ID and messages or any queries and on clicking the send button that form is also saved in database.

**Below is the Screenshot for Contact Us page:**
![ContactUS](https://github.com/SwapnilRajguru/FelixWing-Project/assets/114178229/d59cee47-2e9d-49b5-be04-c707e8e2a1cb)


**Below is the Screenshot of message saved in database:**
![ContactUs_Form](https://github.com/SwapnilRajguru/FelixWing-Project/assets/114178229/b9705995-2b41-424c-b093-12f67a2c5c09)



