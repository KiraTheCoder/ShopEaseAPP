import React, { useState } from 'react';

const MyPayment = ({ amount, onPaymentSuccess }) => {
  const [cardType, setCardType] = useState('debit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [error, setError] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();

    // // Basic validation
    // if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
    //   setError('All fields are required');
    //   return;
    // }

    // // Simulate payment processing
    // setTimeout(() => {
    //   setError('');
    //   onPaymentSuccess();
    //   alert('Payment processed successfully!');
    // }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-4">
      <h2 className="text-2xl font-semibold mb-4">Card Payment</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={(e)=>{e.preventDefault()
        console.log("testing")
      }}>
      {/* <form onS> */}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Card Type</label>
          <div className="flex mt-2">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                className="form-radio"
                name="cardType"
                value="debit"
                checked={cardType === 'debit'}
                onChange={(e) => setCardType(e.target.value)}
              />
              <span className="ml-2">Debit Card</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="cardType"
                value="credit"
                checked={cardType === 'credit'}
                onChange={(e) => setCardType(e.target.value)}
              />
              <span className="ml-2">Credit Card</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            maxLength={16}
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="password"
              id="cvv"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              maxLength={3}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700">
            Card Holder Name
          </label>
          <input
            type="text"
            id="cardHolderName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="Enter card holder name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            value={`₹ ${amount}`}
            readOnly
          />
        </div>
        <button
          type="submit"
        // onClick={handlePayment}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default MyPayment;
