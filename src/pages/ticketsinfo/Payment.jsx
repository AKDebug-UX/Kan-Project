import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';

function Payment({ price }) {
  const context = useContext(myContext);
  const { mode } = context;
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success('Delete cart');
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = parseInt(100);

  const grandTotal = shipping + totalAmout;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [quantity, setQuantity] = useState(1); // Initial quantity is 1

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const buyNow = async () => {
    if (name === '' || email === '' || phoneNumber === '') {
      return toast.error('All fields are required', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

    const addressInfo = {
      name,
      email,
      phoneNumber,
      date: new Date().toLocaleString(
        'en-US',
        {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }
      ),
    };

    var options = {
      key: '',
      key_secret: '',
      amount: price * quantity, // Updated price based on quantity
      currency: 'INR',
      order_receipt: 'order_rcptid_' + name,
      name: 'E-Bharat',
      description: 'for testing purpose',
      handler: function (response) {
        console.log(response);
        toast.success('Payment Successful');

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            'en-US',
            {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            }
          ),
          email: JSON.parse(localStorage.getItem('user')).user.email,
          userid: JSON.parse(localStorage.getItem('user')).user.uid,
          paymentId,
        };

        try {
          const orderRef = collection(fireDB, 'order');
          addDoc(orderRef, orderInfo);
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: '#3399cc',
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };


  const payWithMonnify = () => {
    MonnifySDK.initialize({
      amount: price * quantity,
      currency: "NGN",
      reference: '' + Math.floor((Math.random() * 1000000000) + 1),
      customerName: name,
      customerEmail: email,
      apiKey: "MK_TEST_1TVK38BX4U",
      contractCode: "2436082229",
      paymentDescription: "Test Pay",
      isTestMode: true,
      metadata: {
        "name": "Damilare",
        "age": 45
      },
      paymentMethods: ["CARD", "ACCOUNT_TRANSFER"],
      // incomeSplitConfig: [
      //   {
      //     "subAccountCode": "MFY_SUB_342113621921",
      //     "feePercentage": 50,
      //     "splitAmount": 1900,
      //     "feeBearer": true
      //   },
      //   {
      //     "subAccountCode": "MFY_SUB_342113621922",
      //     "feePercentage": 50,
      //     "splitAmount": 2100,
      //     "feeBearer": true
      //   }
      // ],
      onComplete: function (response) {
        // Implement what happens when the transaction is completed.
        console.log(response);
      },
      onClose: function (data) {
        // Implement what should happen when the modal is closed here
        console.log(data);
      }
    });
  }

  return (
    <>
      <div className="pt-5 mb-9">
        <div className="mx-auto max-w-6xl justify-center px-6 md:space-x-6 xl:px-0">
          <div className="mt-6 h-full rounded-lg bg-black p-6 shadow-md md:mt-0 md:w-1/2">
            <div className="mb-2 text-white flex justify-between w-full">
              <p>Subtotal</p>
              <p>₦{price}.00</p>
            </div>
            <hr className="my-4" />
            <div className="mb-2 text-white flex justify-between w-full">
              <p>Popcorn</p>
              <p>₦0.00</p>
            </div>
            <hr className="my-4" />
            <div className="mb-2 text-white flex justify-between w-full">
              <p>Drink</p>
              <p>₦0.00</p>
            </div>
            <hr className="my-4" />
            <div className="mb-2 text-white flex justify-between w-full">
              <p>Quantity</p>
              <div className="flex items-center">
                <button
                  className="bg-gray-400 text-black px-2 py-1 rounded-md mr-2"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="bg-gray-400 text-black px-2 py-1 rounded-md ml-2"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-white mb-3">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">₦{price * quantity}.00</p>
              </div>
            </div>
            <Modal
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              setName={setName}
              setEmail={setEmail}
              setPhoneNumber={setPhoneNumber}
              buyNow={payWithMonnify}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;