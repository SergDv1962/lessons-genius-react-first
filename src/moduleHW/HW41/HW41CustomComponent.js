import useWindowScroll from "./useWindowScroll";
import useWindowWidth from "./useWindowWidth";

const HW41CustomComponent = () => {
  const scroll = useWindowScroll();

  const styleBox = {
    textAlign: "center",
    backgroundColor: "grey",
    paddingTop: "240px",
    width: "400px",
    height: "100vh",
    border: "3px solid white",
  };

  const {windowWidth} = useWindowWidth();

  return (
    <>
      HW41CustomComponent
      <p>Width window: {windowWidth}</p>
      <a href="/"><button>Update</button></a>
      <div style={styleBox}>I'm box</div>
      {scroll}
    </>
  );
};
export default HW41CustomComponent;
