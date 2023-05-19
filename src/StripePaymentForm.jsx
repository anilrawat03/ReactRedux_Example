import {
    Elements,
    CardElement,
    useElements,
    useStripe
  } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";
  
  const stripePromise = loadStripe("pk_test_51KVb0kDv7RxEvdkbHeIDSYOSwyP7UPaiHuEPHVR1FdSWq1oRl0x43umy8e3KaLR8AIG3mNA3MunHlpJ95b3CGq64002Cmu9GxK");
  
  const handleSubmit = (stripe, elements) => async () => {
    const cardElement = elements.getElement(CardElement);
  
    
    stripe.createToken(cardElement)
    .then((payload) =>
    {
      JSON.stringify(payload);
      console.log('[token]', payload)//send this token in backend 

      //if action_required //3d secure 
    // const payload = stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: elements.getElement(CardElement),
    //   },
    // }).then(payload=>{
    //   if (payload.error) 
    //   {
    //     setError(`Payment failed ${payload.error.message}`);
    //     setProcessing(false);
    //   } else 
    //   {
    //     setError(null);
    //     setProcessing(false);
    //     setSucceeded(true);
    //   }
    // });
    });
     
  };
  
  const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    return (
      <>
        <h1>stripe form</h1>
        <CardElement />
        <button onClick={handleSubmit(stripe, elements)}>Buy</button>
      </>
    );
  }
  
  export  const  StripePaymentForm  = () => (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );