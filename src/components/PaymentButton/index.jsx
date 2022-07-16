/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import { Button } from 'antd';
import React from 'react';
import axios from 'axios';
import './style.css';

/**
 *
 * @param {String} src
 * @returns {Promise}
 */
const loadScript = (src) => new Promise((resolve) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    resolve(true);
  };
  script.onerror = () => {
    resolve(false);
  };
  document.body.appendChild(script);
});

const isDevEnvironment = document.domain === 'localhost';
/**
 *
 * @param {Number} amount
 * @param {String} applicationId
 * @param {String} email
 */

/**
 * Integrating Razorpay payment gateway via this Button. onClick=> will give a ready made UI pop-up.
 * @param {props} object --will have amount and application_id in it
 * @returns {Node} -- UI DIV
 */
export default function PaymentButton({
  amount,
  applicationId,
  setPaymentInfo,
}) {
  const UserMetaData = JSON.parse(sessionStorage.getItem('u_decoded'));

  function getOrderId(amnt, appId, email) {
    const data = JSON.stringify({
      amount: amnt * 100,
      id: `${appId}_${email}`,
    });

    const config = {
      method: 'post',
      url: 'https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/payment',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('id_token')} `,
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(config)
      .then((response) => {
        sessionStorage.setItem('order_id', response.data.id);
        return response.data.id;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
    // !order id is not getting saved in DB (but getting in RAZORPAY db)
    const odi = sessionStorage.getItem('order_id');
    const options = {
      key: isDevEnvironment ? 'rzp_test_NRrhuDEU5IeRQx' : 'PRODUCTION_KEY',
      currency: 'INR',
      amount: amount * 100,
      order_id: getOrderId(amount, applicationId, UserMetaData.email),
      description: 'Thank you for paying the Fees.You will hear from us soon !',
      handler(response) {
        // !DIsCUSS THIS
        console.log(response);

        setPaymentInfo({
          order_id: odi,
          payment_id: response.razorpay_payment_id,
        });
        // console.log(props.PaymentInfo)
      },
      prefill: {
        email: UserMetaData !== null ? UserMetaData.email : '',
        contact:
          UserMetaData !== null
            ? parseInt(UserMetaData.phone_number.substring(3, 13), 10)
            : '',
      },
      readonly: {
        email: true,
        contact: true,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div>
      <Button type="primary" onClick={displayRazorpay}>
        Pay
        {' '}
        {amount}
      </Button>
    </div>
  );
}
