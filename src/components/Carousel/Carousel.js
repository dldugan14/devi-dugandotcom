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
import BD1 from "./BabyDillon1.webp";
import BD2 from "./BabyDillon2.webp";
import BD3 from "./BabyDillon3.webp";
import BD4 from "./BabyDillon4.webp";
import BD5 from "./BabyDillon5.webp";
import BD6 from "./BabyDillon6.webp";
import BD7 from "./BabyDillon7.webp";
import BD8 from "./BabyDillon8.webp";
import BD9 from "./BabyDillon9.webp";
import BD10 from "./BabyDillon10.webp";
import BD11 from "./BabyDillon11.webp";
import BD12 from "./BabyDillon12.webp";
import BD13 from "./BabyDillon13.webp";
import BD14 from "./BabyDillon14.webp";
import BD15 from "./BabyDillon15.webp";
import BT1 from "./BabyTina1.webp";
import BT2 from "./BabyTina2.webp";
import BT3 from "./BabyTina3.webp";
import BT4 from "./BabyTina4.webp";
import BT5 from "./BabyTina5.webp";
import BT6 from "./BabyTina6.webp";
import BT7 from "./BabyTina7.webp";
import BT8 from "./BabyTina8.webp";
import BT9 from "./BabyTina9.webp";
import BT10 from "./BabyTina10.webp";
import BT11 from "./BabyTina11.webp";
import BT12 from "./BabyTina12.webp";
import BT13 from "./BabyTina13.webp";
import BT14 from "./BabyTina14.webp";
import BT15 from "./BabyTina15.webp";

export default function Carousel() {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function slideGenerator() {
    return (
      <>
        <Slide index={0}>
          <Image src={BD1}></Image>
        </Slide>
        <Slide index={1}>
          <Image src={BT1}></Image>
        </Slide>
        <Slide index={2}>
          <Image src={BD2}></Image>
        </Slide>
        <Slide index={3}>
          <Image src={BT2}></Image>
        </Slide>
        <Slide index={4}>
          <Image src={BD3}></Image>
        </Slide>
        <Slide index={5}>
          <Image src={BT3}></Image>
        </Slide>
        <Slide index={6}>
          <Image src={BD4}></Image>
        </Slide>
        <Slide index={7}>
          <Image src={BT4}></Image>
        </Slide>
        <Slide index={8}>
          <Image src={BD5}></Image>
        </Slide>
        <Slide index={9}>
          <Image src={BT5}></Image>
        </Slide>
        <Slide index={10}>
          <Image src={BD6}></Image>
        </Slide>
        <Slide index={11}>
          <Image src={BT6}></Image>
        </Slide>
        <Slide index={12}>
          <Image src={BD7}></Image>
        </Slide>
        <Slide index={13}>
          <Image src={BT7}></Image>
        </Slide>
        <Slide index={14}>
          <Image src={BD8}></Image>
        </Slide>
        <Slide index={15}>
          <Image src={BT8}></Image>
        </Slide>
        <Slide index={16}>
          <Image src={BD9}></Image>
        </Slide>
        <Slide index={17}>
          <Image src={BT9}></Image>
        </Slide>
        <Slide index={18}>
          <Image src={BD10}></Image>
        </Slide>
        <Slide index={19}>
          <Image src={BT10}></Image>
        </Slide>
        <Slide index={20}>
          <Image src={BD11}></Image>
        </Slide>
        <Slide index={21}>
          <Image src={BT11}></Image>
        </Slide>
        <Slide index={22}>
          <Image src={BD12}></Image>
        </Slide>
        <Slide index={23}>
          <Image src={BT12}></Image>
        </Slide>
        <Slide index={24}>
          <Image src={BD13}></Image>
        </Slide>
        <Slide index={25}>
          <Image src={BT13}></Image>
        </Slide>
        <Slide index={26}>
          <Image src={BD14}></Image>
        </Slide>
        <Slide index={27}>
          <Image src={BT14}></Image>
        </Slide>
        <Slide index={28}>
          <Image src={BD15}></Image>
        </Slide>
        <Slide index={29}>
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
