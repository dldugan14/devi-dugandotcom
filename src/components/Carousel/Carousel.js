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
import BD1 from "./BabyDillon1.png";
import BD2 from "./BabyDillon2.png";
import BD3 from "./BabyDillon3.png";
import BD4 from "./BabyDillon4.png";
import BD5 from "./BabyDillon5.png";
import BD6 from "./BabyDillon6.png";
import BD7 from "./BabyDillon7.png";
import BD8 from "./BabyDillon8.png";
import BD9 from "./BabyDillon9.png";
import BD10 from "./BabyDillon10.png";
import BD11 from "./BabyDillon11.png";
import BD12 from "./BabyDillon12.png";
import BD13 from "./BabyDillon13.png";
import BD14 from "./BabyDillon14.png";
import BD15 from "./BabyDillon15.png";
import BT1 from "./BabyTina1.png";
import BT2 from "./BabyTina2.png";
import BT3 from "./BabyTina3.png";
import BT4 from "./BabyTina4.png";
import BT5 from "./BabyTina5.png";
import BT6 from "./BabyTina6.png";
import BT7 from "./BabyTina7.png";
import BT8 from "./BabyTina8.png";
import BT9 from "./BabyTina9.png";
import BT10 from "./BabyTina10.png";
import BT11 from "./BabyTina11.png";
import BT12 from "./BabyTina12.png";
import BT13 from "./BabyTina13.png";
import BT14 from "./BabyTina14.png";
import BT15 from "./BabyTina15.png";

export default function Carousel() {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function slideGenerator() {
    return (
      <>
        <Slide index={0}>
          <Image src={BD1}></Image>
        </Slide>{" "}
        <Slide index={0}>
          <Image src={BT1}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD2}></Image>
        </Slide>{" "}
        <Slide index={0}>
          <Image src={BT2}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD3}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT3}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD4}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT4}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD5}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT5}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD6}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT6}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD7}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT7}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD8}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT8}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD9}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT9}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD10}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT10}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD11}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT11}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD12}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT12}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD13}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT13}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD14}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BT14}></Image>
        </Slide>
        <Slide index={0}>
          <Image src={BD15}></Image>
        </Slide>{" "}
        <Slide index={0}>
          <Image src={BT15}></Image>
        </Slide>
      </>
    );
  }
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={30}
    >
      <div className={classes.root}>
        {!isMobile && (
          <div>
            <ButtonBack className={classes.button}>
              <FontAwesomeIcon size='4x' name='chevron-left' />
            </ButtonBack>
          </div>
        )}
        <Slider className={classes.slider}>{slideGenerator()}</Slider>
        {!isMobile && (
          <div>
            <ButtonNext className={classes.button}>
              <FontAwesomeIcon size='4x' name='chevron-right' />
            </ButtonNext>
          </div>
        )}
      </div>
    </CarouselProvider>
  );
}
