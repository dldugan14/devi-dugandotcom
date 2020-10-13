import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useMediaQuery } from "@material-ui/core";
import theme from "../../styles/theme";
import FontAwesomeIcon from "react-fontawesome";
import useStyles from "./styles";
import imageNames from "./images/manifest";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return item;
  });
  return images;
}

export default function Carousel() {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function slideGenerator() {
    const images = importAll(
      require.context("./images", false, /\.(png|jpe?g|svg|webp)$/)
    );

    return imageNames.map((img, i) => {
      return (
        <Slide index={i} key={img}>
          <Image src={images[img]} />
        </Slide>
      );
    });
  }

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={30}
    >
      <div className={classes.root}>
        <div>
          <ButtonBack className={classes.button}>
            <FontAwesomeIcon
              size={isMobile ? "sm" : "4x"}
              name='chevron-left'
            />
          </ButtonBack>
        </div>
        <Slider className={classes.slider}>{slideGenerator()}</Slider>
        <div>
          <ButtonNext className={classes.button}>
            <FontAwesomeIcon
              size={isMobile ? "sm" : "4x"}
              name='chevron-right'
            />
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
}
