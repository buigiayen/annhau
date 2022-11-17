import { Button,Result  } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home404 = () => {
    const Router = useNavigate();
    const ReHome = () => {
      Router('/');
    }

    return (
        <Result
        status="404"
        title="404"
        subTitle='Sorry, the page you visited does not exist.' 
        extra={<Button type="primary" onClick={() => ReHome()}>Back Home</Button>}
      />
    )
}
export default Home404;