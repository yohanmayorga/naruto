"use client";
import styles from "@/app/styles/CharacterGrid.module.css";

import { CharacterCard } from "./CharacterCard";

interface CharacterGridProps {
  characterList: any;
}

export function Charactergrid({ characterList }: CharacterGridProps) {
  return (
    <div className={styles.body}>
      {characterList.map((character: any) => {
        return (
          <div className={styles.card} key={character.id}>
            <CharacterCard name={character.name} id={character.id.toString()} />
          </div>
        );
      })}
    </div>
  );
}
