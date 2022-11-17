import { Menu } from 'antd';
import { useMemo, useState } from 'react';

import RouterLink from './Config'
import { useNavigate } from "react-router-dom";
import './style.css'
const Nav = () => {
  const [Page, SetPage] = useState([]);
  useMemo(() => {
    SetPage(RouterLink());
  }, [])
  const MenuOnePage = () => {
    const history = useNavigate();
    return Page.map((data, index) => {
      if (data.Chilren=== undefined || data.Chilren === null) {
        return (
          <Menu.Item key={index} icon={data.Icon} onClick={() => { history(data.Link) }} >
            {data.label}
          </Menu.Item>
        )

      } else {
        return (
          <Menu.SubMenu key="SubMenu" title={data.label} icon={data.Icon}>
            {data.Chilren.map((ChilrenData, ChirenDataIndex) => {
              return(
                <Menu.Item key={ChirenDataIndex} icon={ChilrenData.Icon} onClick={() => { history(ChilrenData.Link) }}>
                  {ChilrenData.label}
                </Menu.Item>
              )
             
            })}
          </Menu.SubMenu>
        )
      }
    })
  }
  return (
    <Menu mode="horizontal" selectedKeys={[1]} style={{background:'none'}}>
      <MenuOnePage />
    </Menu>
  )
}



export default Nav;