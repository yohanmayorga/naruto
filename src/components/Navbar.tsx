import Link from "next/link";
import styles from "./../app/styles/Navbar.module.css";
import Image from "next/image";
import logo from "@/../../public/assets/logo.png";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        {" "}
        <Image src={logo} alt="logo" className={styles.logo} />
      </Link>
    </div>
  );
}
