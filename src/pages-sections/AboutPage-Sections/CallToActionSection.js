import React from 'react';
// @material-ui/core components
import { makeStyles, withStyles } from '@material-ui/core/styles';

// core components
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';

import styles from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/callToActionStyle';

const useStyles = makeStyles(styles);

function CallToActionSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Quer se tornar provedor?</h2>
          <h5 className={classes.description}>
            Para explorar serviços de telecomunicações, é necessário que a sua empresa
            possua a permissão ou autorização emitida pela ANATEL. <br/>
            
          </h5>
          <h5 className={classes.description}>
            Vem com Easy que nós te ajudamos!            
            {/* Com a Easy Way sua
            empresa terá os melhores serviços de consultoria em legislação, regulamentação
            e fiscalização no setor de telecomunicações, em conformidade com as normas da
            Agência Nacional de Telecomunicações – ANATEL, do Conselho Regional de
            Engenharia, Arquitetura e Agronomia – CREA e do Conselho Federal de
            Técnicos Industriais – CFT. Nossa equipe é credenciada em todos os CREA’s e
            CRT’s do país, e atuamos em todas as fases do processo de outorga e
            licenciamento junto a ANATEL, com suporte 24 horas para sua empresa estar
            sempre segura e dentro das normas do setor. */}
          </h5>

          <Button
            href="https://api.whatsapp.com/send?l=pt-BR&phone=5561986016521"
            color="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >                    
              Contrate Agora
            <i className={classes.icon + " fab fa-whatsapp"} />
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(CallToActionSection);