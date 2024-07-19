import { useState, useEffect, useRef } from "react";
import AddComp from "./AddComp";

function BoxHead({ setReload, groups, backGroup }) {
  const [adding, setAdding] = useState(false);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      imgRef.current &&
      !imgRef.current.contains(event.target)
    ) {
      setAdding(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="boxHeadContainer" ref={containerRef}>
      {groups ? (
        <img
          src="/src/assets/img/arrow-circle-left.png"
          alt="arrow"
          onClick={() => backGroup("groups")}
        />
      ) : null}
      <img
        ref={imgRef}
        onClick={() => setAdding(!adding)}
        src="/src/assets/img/plus.svg"
        alt=""
      />
      {adding && <AddComp setReload={setReload} setAdding={setAdding} />}
    </div>
  );
}

export default BoxHead;
