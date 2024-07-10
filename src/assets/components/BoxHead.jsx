import { useState, useEffect, useRef } from "react";
import AddComp from "./AddComp";

function BoxHead({ setReload }) {
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
        <div ref={containerRef}>
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
