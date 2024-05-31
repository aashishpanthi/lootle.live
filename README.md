# lootle

# Project introduction

**Lootle** -> _(loot-le)_ is a website and MIT license open source project where you can keep track of the price of your MacBook or of your favorite Raspberry Pi or the stock price of Microsoft. You just enter the URL of the product/stock then the website keeps the history of the price fluctuation, presents it to you, and even notifies you when the price drops down that you specified.

# Functions ⚒

Oh, we haven't discussed much on the functions of the website 😅. It checks the price of the product specified. Not only it checks the price, it extracts the name and information of the product from the website. It gathers information on a regular interval of fiveteen minutes and stores inside of the database. If the current price is found to be less than the specified price by the user then, the user will be updated with an email. And the user can also check the history of the price fluctuation through the nice little dashboard.

## Video overview
[![IMAGE ALT TEXT HERE](https://github.com/aashishpanthi/lootle.live/blob/main/client/public/static/video-placeholder.jpg)](https://www.youtube.com/watch?v=R_GvQFZ8CIc)

### Tech stack 👩‍💻

- **Reactjs** -> For frontend
- **MongoDB Atlas** -> For mongoDB database
- **Express.js** -> For API
- **Digital Ocean** -> Deployment
- **Puppeteer/Cheerio** -> Getting Price
- **Nodemailer** -> To send email

# Currently supported sites:

1. [Flipkart.com](https://flipkart.com) for available products only
2. [Amazon.com](https://amazon.com) for available products only
3. [Amazon.co.uk](https://amazon.co.uk) for available products only
4. [Amazon.in](https://amazon.in) for available products only
5. [cnbc.com](https://cnbc.com) for stock price
6. [daraz.com.np](https://daraz.com.np) for available products only

> Want a full guide on building the project? I've covered it here: https://blog.aashish-panthi.com.np/creating-a-price-tracker-in-mern

# Getting started:
### Clone the project
To get started, clone the project repository to your local machine:
```bash
git clone https://github.com/aashishpanthi/lootle.live.git
```
### Install Dependencies
Navigate to the project directory and install the required dependencies for all client, server, and bot.

**Client (Reactjs)**
```bash
cd lootle.live/client
npm install
```

**Server (Express.js)**
```bash
cd ../server
npm install
```

**Bot**
```bash
cd ../bot
npm install
```

**Set Up Environment Variables**
Create a .env file in all directories and add the following environment variables:

> For the client, the project uses Nhost to handle the authentication. So you need to set up a Google login with nhost. This will help you: https://docs.nhost.io/authentication/sign-in-with-google
```plaintext
REACT_APP_NHOST_SUBDOMAIN= paste_from_nhost_dashboard
REACT_APP_NHOST_REGION = paste_from_nhost_dashboard
```

**Server**
```plaintext
PORT= port_for_server
MONGO_URI=your_mongodb_atlas_connection_string
```

**Bot**
```plaintext
MONGO_URI = 

EMAIL_USERNAME = 
EMAIL_PASSWORD = 
EMAIL_FROM = 
EMAIL_SENDER =
```
There are variables related to Email sending. The bot uses a nodemailer to send emails. Zoho mail is used for email hosting in this project. You can learn more about how to setup zoho mailer and nodemailer for your project here: https://blog.aashish-panthi.com.np/send-professional-email-using-nodemailer-and-zoho

### Start the Development Server
**Client**
```bash
cd ../client
npm start
```

**Server**
```bash
cd ../server
npm start
```

**Bot**
The bot will run repeatedly (at certain intervals) to check the price and update the user. You would want it to deploy to some Linux servers and use cronjobs to run the bot in certain intervals. The start command is similar:
```bash
cd ../bot
npm start
```

**Access the Application**
Once both the client and server are running, you can access the application in your browser at http://localhost:3000.

The application should be working now but there is still one configuration remaining. The path (classname or ids) from where the bot picks name, image, and price of the product needs to be configured for each of the sites. The database should look like this:
![Database of the lootle](https://github.com/aashishpanthi/lootle.live/assets/60884239/a5b4fa80-a8bf-46cb-8fb2-f976db7dbdf0)

Here are the values you want to use for Flipkart and Amazon
**For Flipkart**
```
priceLocation : "div.CEmiEU div._30jeq3._16Jk6d"
imageLocation : "img.q6DClP"
nameLocation : ".yhB1nd .B_NuCI"
```

**For Amazon.com or Amazon.in or Amazon.co.uk**
```
priceLocation: "span.a-price span.a-offscreen"
imageLocation:".imgTagWrapper img#landingImage"
nameLocation:"span#productTitle"
```
> If you want to support more sites then you can find the path names on your own or ask me at https://www.linkedin.com/in/aashishpanthi/

Happy Hacking!!
