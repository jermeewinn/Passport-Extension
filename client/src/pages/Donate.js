import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js'
const Donate = () => {

return(
    <main id="donate-page" className="flex-row">
        <div className=".timezone-converter">
                <h2>Your Donations Are Greatly Appreciated</h2>
                <p>Your donation will help the developers at Passport-Extension to further develop the site and add more features in the future</p>
                <a id="donate-button" className="button is-info is-outlined" href="https://buy.stripe.com/test_eVag2B6azdmzf28aEE">One Time 5$ Donation</a>
        </div>
    </main>
    
)
};

export default Donate;

