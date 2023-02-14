import React from "react";

import { getDatabase, ref, push, update } from "firebase/database";

import firebase from "../database/firebase";

const FaveButton = ({ result, isInFaves, faves }) => {
  const handleClick = () => {
    const db = getDatabase(firebase);
    const favesRef = ref(db, "favourites");
    // if result is in db, add 1 to likes
    if (isInFaves(result.id)) {
      console.log("isInFaves");
      const faveDbKey = faves.filter((fave) => fave.id === result.id)[0].key;
      const faveCount = faves.filter((fave) => fave.id === result.id)[0].faves;
      console.log("faveDbKey: ", faveDbKey);
      const faveRef = ref(db, "favourites/" + faveDbKey);
      console.log("faveRef: ", faveRef);
      update(faveRef, { faves: faveCount + 1 })
        .then(() => {
          console.log("add 1 like");
        })
        .catch((err) => {
          console.log(err);
        });
      // else, add to db and set likes to 1
    } else {
      const newFaveKey = push(favesRef).key;
      update(favesRef, { [newFaveKey]: { ...result, faves: 1 } })
        .then(() => {
          console.log("add to db");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return <button onClick={handleClick}>Favourite</button>;
};

export default FaveButton;
