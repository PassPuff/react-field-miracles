import React from "react";
import useSound from "use-sound";
import fxSound from "/pole_letter_correct.mp3";

const Char = (props) => {
  const [open, setOpen] = React.useState(false);
  const cardClassName = "Card" + (open ? " Card--open" : "");
  const [play] = useSound(fxSound);

  return (
    <div className="Char">
      <div className="Scene">
        <div
          className={cardClassName}
          onClick={() => {
            setOpen(!open);
            play();
          }}
        >
          <div className={"Card-face Card-face--front"} />
          <div className={"Card-face Card-face--back"}>
            {props.char.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Char;
