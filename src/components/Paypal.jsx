import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const Paypal = () => {
  
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-col justify-content-center align-items-center">
      <div className="w-50 m-5">
        <PayPalScriptProvider
          options={{ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID }}
        >
          <PayPalButtons 
              style={{ layout: "vertical", label: "buynow" }} 
              createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: "4.99",
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
              console.log('actions', actions)
              return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name; 
                  alert(`Transaction completed by ${name}`);
                  navigate('/');
              });
          }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Paypal;
