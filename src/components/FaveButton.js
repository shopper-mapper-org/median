import React from "react";
import { errorAlert } from "../utils/alerts";
import { getDatabase, ref, push, update } from "firebase/database";

import firebase from "../database/firebase";

const FaveButton = ({ result, isInFaves, faves }) => {
  const handleClick = () => {
    const db = getDatabase(firebase);
    const favesRef = ref(db, "favourites");
    // if result is in db, add 1 to likes
    if (isInFaves(result.id)) {
      const faveDbKey = faves.filter((fave) => fave.id === result.id)[0].key;
      const faveCount = faves.filter((fave) => fave.id === result.id)[0].faves;
      const faveRef = ref(db, "favourites/" + faveDbKey);
      update(faveRef, { faves: faveCount + 1 }).catch((err) => {
        errorAlert(err);
      });
      // else, add to db and set likes to 1
    } else {
      const newFaveKey = push(favesRef).key;
      update(favesRef, { [newFaveKey]: { ...result, faves: 1 } }).catch((err) => {
        errorAlert(err);
      });
    }
  };
  return (
    <button
      className="fav-button"
      onClick={handleClick}
    >
      Favourite
    </button>
  );
};

export default FaveButton;
