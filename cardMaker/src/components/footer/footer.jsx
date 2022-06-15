import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo((props) => {
  return <div className={styles.footer}>Code your dream</div>;
});

export default Footer;
