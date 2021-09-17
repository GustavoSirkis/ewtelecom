import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Parallax/Parallax.js";

import styles from "../styles/jss/nextjs-material-kit/pages/aboutPage.js";

// Sections for this page
import ProductSection from "../pages-sections/AboutPage-Sections/ProductSection.js";
import TeamSection from "../pages-sections/AboutPage-Sections/TeamSection.js";
import WorkSection from "../pages-sections/AboutPage-Sections/WorkSection.js";
import CallToActionSection from "../pages-sections/AboutPage-Sections/CallToActionSection.js";



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/banner_2.png">
        <div className={classes.container}>
          <GridContainer direction="row" alignItems="center">
          <GridItem xs={6}>
              <div className={classes.contentContainer}>
                <section className={classes.hero}>
                  {/* <span>👏 Bem-vindo à Easy Way</span> */}
                  <h1 className={classes.title}>
                     <span>Easy Way</span> Telecom
                  </h1>
                  <p>
                    Conheça nossos <span>diferenciais</span> 
                  </p>
                  <br />
                  <Button
                    href="/services"
                    color="primary"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    FALE CONOSCO
                    <i className={classes.icon + " fab fa-whatsapp"} />
                  </Button>
                </section>
               
              </div>
            </GridItem>  
            <GridItem xs={6} >
               <img
                  src="/img/logo_.svg"
                  alt="logo"
                  className={classes.pulse}
                />
            </GridItem>  
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CallToActionSection />
          <ProductSection />
          <CallToActionSection />
          {/* <TeamSection /> */}
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
