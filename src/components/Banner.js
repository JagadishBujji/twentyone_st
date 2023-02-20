const Banner = () => {
  return (
    <>
      {/* <img
        src="../images/ezgif.com-video-to-gif.gif"
        alt="gif"
        className="banner"
      /> */}

      {/* <video width="100%" height="100%" controls autoPlay>
        <source src="../images/header.mp4" type="video/mp4" />
      </video> */}

      <lottie-player
        src="https://lottie.host/c61164ad-24f1-484c-8686-a31240f70275/LJmkHop3Gv.json"
        // background="transparent"
        speed="2"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    </>
  );
};
export default Banner;
