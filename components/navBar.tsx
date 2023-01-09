import Link from "next/link";
import { MenuList } from "../provider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Menu, MenuProps } from "antd";

const NavBar = () => {
  const route = useRouter();
  const { pathname } = route;
  const [current, setCurrent] = useState("1");
  const [menu, _] = useState<MenuList[]>([
    {
      label: (
        <Link className="nav-bar-link" href="/" rel="noopener noreferrer">
          Home
        </Link>
      ),
      key: "/",
    },
    {
      label: (
        <Link className="nav-bar-link" href="/quize1" rel="noopener noreferrer">
          Quize 1
        </Link>
      ),
      key: "/quize1",
    },
    {
      label: (
        <Link className="nav-bar-link" href="/quize2" rel="noopener noreferrer">
          Quize 2
        </Link>
      ),
      key: "/quize2",
    },
  ]);

  useEffect(() => {
    setCurrent(pathname);
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      className="container-nav-bar"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={menu}
    />
  );
};

export default NavBar;
