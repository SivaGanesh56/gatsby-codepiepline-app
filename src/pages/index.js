import React from "react";

const index = () => {
  console.log(process.env.MY_APP_KEY);

  if (process.env.GATSBY_ENV === "development") {
    return (
      <div>
        <h1>Development Home Page</h1>
        <p>Current Env: {process.env.GATSBY_ENV}</p>
        <p>key: {process.env.GATSBY_MY_APP_KEY}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div>{JSON.stringify(process.env, null, 2)}</div>
    </div>
  );
};

export default index;
