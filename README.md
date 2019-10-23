# causaimpacto

## Instructions

1. Download the repository and use the terminal to access it.
1. Access **/front** and install the necessary packages (`npm install`).
1. Access **/back** and install the necessary packages (`npm install`).
1. Create `.env.development` and `.env.production` files within **/front** that include at least `REACT_APP_API_URL=http://localhost:5000`. It should also include a `REACT_APP_PAYPAL_CLIENT_ID` in order to make the PayPal button work.
1. Create `.env`file within **/back**, which should include: `PORT = 5000`, `ENV = development`, `DB` with database call, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` for cloudinary uploads;  `EMAIL_ADDRESS` and `EMAIL_PWD` for nodemailer e-mails.
1. Start backend **/back** with `npm run dev`.
1. Start frontend **/front** with `npm start`. The browser will open up shortly on **localhost:3000**.
