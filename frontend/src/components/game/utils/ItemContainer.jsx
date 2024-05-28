import React from "react";

export const ItemContainer = ({ itemContainer, gameObjects }) => {
  return (
    <div className="item-container">
      {itemContainer.map((item) => {
        const itemObj = gameObjects[item];
        return (
          <div key={itemObj.id} className="item">
            <img src={itemObj.imgSrc} alt="item" />
          </div>
        );
      })}
    </div>
  );
};
