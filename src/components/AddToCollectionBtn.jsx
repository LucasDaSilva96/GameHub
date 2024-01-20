import React, { useState } from "react";
import {
  getLocalStorage,
  pushDataToLocalStorage,
  removeDataFromLocalStorage,
} from "../helpers/localStorage";

function AddToCollectionBtn({ data }) {
  const [hasAdded, setHasAdded] = useState(
    Boolean(getLocalStorage().find((el) => el.id === data.id))
  );
  return (
    <React.Fragment>
      {!hasAdded ? (
        <div className="ml-[auto] z-[20] flex items-center gap-1">
          <span>Add to your collection</span>
          <img
            src="/icon/folder-plus.svg"
            alt="add to collection icon"
            role="button"
            className="py-2 px-2"
            onClick={() => {
              pushDataToLocalStorage(data);
              setHasAdded(true);
            }}
          />
        </div>
      ) : (
        <div className="ml-[auto] z-[20] flex items-center gap-1">
          <span>Remove from your collection</span>
          <img
            src="/icon/folder-minus.svg"
            alt="add to collection icon"
            role="button"
            className="py-2 px-2"
            onClick={() => {
              removeDataFromLocalStorage(data);
              setHasAdded(false);
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default AddToCollectionBtn;
