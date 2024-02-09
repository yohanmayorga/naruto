import { Charactergrid } from "@/components/CharacterGrid";
import { getCharacters } from "@/lib/NarutoAPI";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import image from "@/../../public/assets/background1.png";

export default async function Home() {
  const charactersList = await getCharacters();
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <Link href="/characters" className={styles.link}>
          <Image src={image} alt="naruto" className={styles.image} />
          <p className={styles.title}>Characters</p>
        </Link>
      </div>
    </div>
  );
}
