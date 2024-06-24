// import { useState } from "react";

import { useEffect, useState } from "react";

// function Button() {
//   const [count, setCount] = useState(0);

//   function clickHandler() {
//     let newCounter = 0;
//     newCounter = count + 1;
//     console.log(`click Ke : ${newCounter} `);
//     setCount(newCounter);
//   }

//   return <button onClick={clickHandler}>Saya Di klik {count}</button>;
// }

// export default Button;

const Button = () => {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);

  useEffect(() => {
    console.log(`Tes Like ${countLike} || Tes Dislike ${countDislike}`);
  }, []);

  return (
    <>
      <button onClick={() => setCountLike(countLike + 1)}>
        {countLike} Like
      </button>
      <button onClick={() => setCountDislike(countDislike + 1)}>
        {countDislike} Dislike{" "}
      </button>
    </>
  );
};

export default Button;
