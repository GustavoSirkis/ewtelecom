import { createStyles } from '@material-ui/core';
import { container, title } from '../../../nextjs-material-kit';

const callToActionStyle = createStyles({
    container: {
      ...container,
    },
    section: {      
      padding: '2rem 0',
      textAlign: 'center',
    },
    title: {
      ...title,
      marginBottom: '1.5rem',
      marginTop: '1.5rem',
      minHeight: '32px',
    },
    description: {
      color: '#999',
      textAlign: 'justify',
      /* marginTop: '1.5rem',
      marginBottom: '1.5rem', */
      textIndent: '1rem',
    },
    icon: {
       marginLeft: '.5rem',
    },
    p1:{
      paddingTop: '110px',
    },
    p2:{
      paddingTop: '225px',
    },
    p3:{
      paddingTop: '340px',
    },
    p4:{
      paddingTop: '465px',
    },
    p5:{
      paddingTop: '575px',
    },
    p6:{
      paddingTop: '685px',
    },
    p7:{
      paddingTop: '805px',
    },
    p8:{
      paddingTop: '925px',
    },
    p9:{
      paddingTop: '1035px',
    },
    p10:{
      paddingTop: '1145px',
    },
    p11:{
      paddingTop: '1255px',
    },
    p12:{
      paddingTop: '1365px',
    },
  });

export default callToActionStyle;