export default async function displayRazorpay() {
    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());
  
    console.log(data);
  
    const options = {
        //use env file for adding the key
      key: '',
      currency: data.currency,
      amount: data.amount,
      name: "Satwik Prabhu",
      description: "Wallet Transaction",
      image: "http://localhost:1337/logo.png",
      order_id: data.id,
    //   handler: function (response) {
    //     alert("PAYMENT ID ::" + response.razorpay_payment_id);
    //     alert("ORDER ID :: " + response.razorpay_order_id);
    //   },
      prefill: {
        name: "Satwik Prabhu",
        email: "satwikprabhu@gmail.com",
        contact: "9999999999",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }