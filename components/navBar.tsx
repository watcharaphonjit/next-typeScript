import Link from "next/link";
import { MenuList } from "../provider";
import { useState } from "react";

const NavBar = () => {
  const [menu, _] = useState<MenuList[]>([
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Market",
      href: "/market/",
    },
  ]);

  return (
    <section className="container-nav-bar">
      {menu.map((el) => (
        <div key={el.label} className="d-inline">
          <Link className="nav-bar-link" href={el.href}>
            {el.label}
          </Link>
        </div>
      ))}
    </section>
  );
};

export default NavBar;
