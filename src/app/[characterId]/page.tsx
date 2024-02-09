import { getCharacter } from "@/lib/NarutoAPI";
import Image from "next/image";
import styles from "./characterID.module.css";
import Link from "next/link";

export default async function CharacterPage({
  params,
}: {
  params: { characterId: string };
}) {
  const { characterId } = params;
  const characterObject = await getCharacter(characterId);

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.name}>{characterObject.name}</div>
        <div className={styles.img}>
          <Image
            priority
            src={characterObject.images[0]}
            alt="image"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.details}>
          <label className={styles.label}>Birthday: </label>
          {characterObject.personal.birthdate}
        </div>
        <div className={styles.details}>
          <label className={styles.label}>Gender: </label>
          {characterObject.personal.sex}
        </div>
        <div className={styles.details}>
          <label className={styles.label}>Clan: </label>
          {characterObject.personal.clan}
        </div>
        <div className={styles.button}>
          <Link href="/characters" className={styles.link}>
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}
