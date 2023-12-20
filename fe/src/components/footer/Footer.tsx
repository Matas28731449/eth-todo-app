import React from "react";
import "./Footer.scss";

interface FooterProps {
  displayCurrentAccount: string;
}

export default function Footer(props: FooterProps) {
  return (
    <div className="footer">
      <div className="footer__content">Current account: {props.displayCurrentAccount}</div>
      <div className="footer__content">
        <p>Created by Matas L</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
