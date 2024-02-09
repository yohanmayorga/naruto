import Link from "next/link";
import styles from "@/app/styles/CharacterCard.module.css";

interface CharacterCardProps {
  name: string;
  id: string;
}

export function CharacterCard({ id, name }: CharacterCardProps) {
  return (
    <Link href={id} key={name + "card"} className={styles.name}>
      <p>{name}</p>
    </Link>
  );
}
