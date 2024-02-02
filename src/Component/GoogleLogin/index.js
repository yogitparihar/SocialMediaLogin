import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import axios from "axios";
export const LoginGoogle = () => {
  return (
    <div className="App-button">
      <p>Login With google</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          axios.post(
            `http://192.168.50.35:8080/api/google/decode?googleToken=${
              credentialResponse.credential
            }&clientId=${"789727119243-gm310fnsq3tlng99rh8b39ca6cicura9.apps.googleusercontent.com"}`
          ).then((response)=>{
            console.log("response",response)
          }).catch((err)=>{
            console.log("err",err)
          })
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};
