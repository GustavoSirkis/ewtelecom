import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { AssignmentTurnedIn, RssFeed, Security, ThumbUp, WifiTethering } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Soluções Assertivas</h2>
          <h5 className={classes.description}>
            Somos formados por profissionais capacitados e experientes, atuantes na
            área de telecomunicações, que dedicam conhecimento e expertise para
            desenvolver uma<br/> consultoria  especializada em atender às necessidades
            dos provedores, prezando sempre pela confiança e qualidade.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>

          <GridItem xs={12} sm={12} md={4}>
            <a href="/services">
              <InfoArea
                title="Credenciamento e Outorga Anatel"
                description=" "
                icon={VerifiedUser}
                iconColor="info"
                vertical
              />
            </a>            
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <a href="/services">
              <InfoArea
                title="Segurança do Trabalho"
                description=" "
                icon={Security}
                iconColor="success"
                vertical
              />
            </a>            
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Pós-Outorga SCM"
              description=" "
              icon={AssignmentTurnedIn}
              iconColor="warning"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Documentação CREA|CFT"
              description=" "
              icon={ThumbUp}
              iconColor="success"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Compartilhamento de Postes"
              description=" "
              icon={RssFeed}
              iconColor="primary"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Cadastro de Estação e Radioenlace"
              description=" "
              icon={WifiTethering}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
