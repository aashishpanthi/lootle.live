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
