import React from "react";
import FacebookLogin from "react-facebook-login";
export const FacebookLoginPage = () => {
  const responseFacebook =(response)=>{
    console.log("responseFacebook",response)
  }
  return (
    <div className="App-button">
      <p>Login with facebook</p>
      <FacebookLogin
        appId="1103631600634996"
        autoLoad={true}
        fields="name, email, picture"
        callback={responseFacebook}
        redirectUri="https://localhost:3000"
      />
    </div>
  );
};
