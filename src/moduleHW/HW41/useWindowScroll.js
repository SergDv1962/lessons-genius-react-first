import { useState, useEffect } from "react";

const useWindowScroll = () => {
  const [scrollLength, setScroll] = useState(0);

  const [move, setMove] = useState('20px');
  const handleLeft = ()=>setMove('50px');

  const scrollStyle = {
    backgroundColor: "black",
    position: "fixed",
    top: move,
    left: move,
    width: "100px",
  };
  
  useEffect(() => {
    const handleScroll = () => {
      console.log("Прокрутка сталася");
      setScroll(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      I'm from HW41useWindowScroll
      <div style={scrollStyle}>
        <button onClick={handleLeft}>Move Me</button>
        Scrollable Content:
        <br /> {scrollLength} px
      </div>
    </>
  );
};
export default useWindowScroll;
