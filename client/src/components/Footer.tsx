import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Shixun Li. All Rights Reserved.</p>
      <div className="footer__links">
        {["About", "privacy Policy", "Licensing", "Contact"].map(
          (item, index) => (
            <Link
              key={index}
              href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}
              className="footer__link"
            >
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
