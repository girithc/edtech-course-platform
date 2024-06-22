import Script from "next/script";

interface MakePaymentParams {
  productId: string;
}

const makePayment = async ({ productId }: MakePaymentParams) => {
  // Make API call to the FastAPI server
  const data = await fetch("http://localhost:8000/pay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: 2000,
      currency: "INR",
      receipt: productId,
    }),
  }).then((t) => t.json());

  const options = {
    key: "rzp_test_GzlLiqxhBQXN0G", // Enter your Razorpay Key ID
    name: "Acme Corp",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Purchase Description",
    handler: function (response: any) {
      // Validate payment at server - using webhooks is a better idea.
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
    prefill: {
      name: "John Doe",
      email: "jdoe@example.com",
      contact: "9876543210",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();

  paymentObject.on("payment.failed", function (response: any) {
    alert("Payment failed. Please try again. Contact support for help");
  });
};

export default function PaymentButton() {
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <button
        onClick={() => {
          makePayment({ productId: "example_ebook" });
        }}
        className="w-40 h-10 rounded-xl bg-black dark:bg-white border dark:border-white border-transparent text-white dark:text-black text-sm"
      >
        Join Now
      </button>
    </>
  );
}
