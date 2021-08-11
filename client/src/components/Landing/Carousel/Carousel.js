// ReactCarousel export default, height can be passed by params, 
// items can be modified using items array, take all assigned width.

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper} from "@material-ui/core";

import img1 from "../../../assets/img/Carousel/test1.png";
import img2 from "../../../assets/img/Carousel/test2.png";
import img3 from "../../../assets/img/Carousel/test3.png";

export default function ReactCarousel({ height }) {
  const itemHeight = height ? height : "400px";

  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: img1,
      height: itemHeight,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: img2,
      height: itemHeight,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: img3,
      height: itemHeight,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${props.item.img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      height: props.item.height,
      display: "flex",
      flexDirection: "column",
    },
    textContainer: {
      marginTop: "auto",
      backgroundColor: "black",
      opacity: "0.5",
      zIndex: "1",
    },
    opaqueFilter: {
        zIndex: "3",
      },
  };
  return (
    <Paper elevation={3} style={styles.paperContainer}>
      {/* <div style={styles.textContainer}>
        <div style={styles.opaqueFilter}>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
        </div>
      </div> */}
    </Paper>
  );
}
