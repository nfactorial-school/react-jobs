import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import Link from "next/link";

const MyMenu = styled(Menu)`
  width: 100%;
`;

function Header(props) {
  return (
    <MyMenu mode="horizontal">
      <Menu.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/countries">
          <a>Countries</a>
        </Link>
      </Menu.Item>
    </MyMenu>
  );
}

export default Header;
