import { Button,Result  } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeBaoTri = () => {
    const Router = useNavigate();
    const ReHome = () => {
      Router('/');
    }

    return (
        <Result
        status="404"
        title="Trang hiện tại đang bảo trì"
        subTitle='Sorry, the page you visited does not exist.' 
        extra={<Button type="primary" onClick={() => ReHome()}>Back Home</Button>}
      />
    )
}
export default HomeBaoTri;