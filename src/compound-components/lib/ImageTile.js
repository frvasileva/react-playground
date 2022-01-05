import { createContext, useContext, useState } from "react";
import "./ImageTile.css";

var ImageTileContext = createContext();

function ImageTile({ children, ...restProps }) {
  const [currentDate, setCurrentDate] = useState(null);

  return (
    <ImageTileContext.Provider value={{ currentDate, setCurrentDate }}>
      <div className="image-tile-wrapper">{children}</div>
    </ImageTileContext.Provider>
  );
}

function Image({ children, ...restProps }) {
  return (
    <>
      <img src={children} {...restProps} alt="random text" width="100%" />
    </>
  );
}
function Description({ children, ...restProps }) {
  console.log(children);

  var context = useContext(ImageTileContext);
  console.log("context", context);
  var { date, setCurrentDate } = useContext(ImageTileContext);

  return (
    <>
      <p {...restProps}>{children}</p>
      <p>Date: {context.currentDate}</p>
      <hr />
      <input
        type="button"
        onClick={() => {
          setCurrentDate(new Date().toLocaleTimeString());
          console.log(date);
        }}
        value="Add text"
      />
    </>
  );
}

ImageTile.Description = Description;
ImageTile.Image = Image;

export { ImageTile };
