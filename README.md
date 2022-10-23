# SoundWave 

SoundWave is an e-commerce website created in Next.js. It pulls products from the Sanity CMS and allows users to view products, add items to their cart and checkout using the Stripe payments system.

[View the live website](https://soundwave-darylste.vercel.app/)

## Technologies 

### Next.js

This project was created using the [Next.js](https://nextjs.org/docs/getting-started)  React framework. To run in development mode, run ```npm run dev``` in the terminal. This will run the application on [http://localhost:3333](http://localhost:3000/).

### Sanity CMS

Banners and products in this website are pulled from the [Sanity CMS](https://www.sanity.io/), alllowing dynamic updating of items without updating the codebase.

### Stripe

This project uses the [Stripe](https://stripe.com/gb) platform to handle payments. Users can add items to their cart and complete a checkout process via Stripes test payments feature. 

To use this test feature, use a card number, such as  [4242 4242 4242 4242](https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers#visa). Enter the card number in the Dashboard or in any payment form.

-   Use a valid future date, such as  **12/34**.
-   Use any three-digit CVC (four digits for American Express cards).
-   Use any value you like for other form fields.
