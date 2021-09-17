import { container, title } from "../../nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  icon: {
    marginLeft: '.5rem',
  },

  pulse: {
    animation: 'pulse 0.7s infinite',
    margin: '0 auto',
    maxWidth: "16rem",
    display: 'table',
    marginTop: '0px',
    animationDirection: 'alternate',
    webkitAnimationName: 'pulse',
    animationName: 'pulse',
    '@media (max-width: 426px)': {
      width: '5rem',
      margin: '0 1rem 5rem 5rem',
    },
  },
 
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    margin: '0 auto',
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    width: '95%',
  },
  mainRaised: {
    marginTop: '-4rem',
    /* margin: "-60px 30px 0px", */
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  contentContainer: {
    ...container,
    maxWidth: '1120px',
    margin: ' 0 auto',
    padding: '0 2rem',
    paddingTop: '5rem',
    height: 'calc(100vh - 5rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 992px)': {
      width: '100%',
      marginLeft: 'auto',      
      marginTop: '1rem',
      paddingTop: '2rem',
    },
  },
  hero: {
    maxWidth: '600px',
    textAlign: 'left',
    '& > span': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      maxWidth: '510px',
      margin: '10px 0 0',
    },
    '& h1': {
      fontSize: '3.5rem',
      lineHeight: '4rem',
      fontWeight: 900,
      marginTop: '2.5rem',
      '& span': {
        color: '#66cc99',
      },
    },
    '& p': {
      fontSize: '1.5rem',
      lineHeight: '2.5rem',
      marginTop: '1.5rem',
      fontWeight: 'bold',

      '& span': {
        color: '#66cc99',
        fontWeight: 'bold',
      },
    },
    button: {
      marginTop: '2.5rem',
    },
    '@media (max-width: 992px)': {
      '& > span': {
        fontSize: '1.rem',
        fontWeight: 'bold',
        maxWidth: '510px',
        margin: '10px 0 0',
      },
      '& h1': {
        fontSize: '3rem',
        lineHeight: '3rem',
        fontWeight: 900,
        marginTop: '2.5rem',
        '& span': {
          color: '#66cc99',
        },
      },
      '& p': {
        fontSize: '1.rem',
        lineHeight: '2.5rem',
        marginTop: '1.5rem',
        fontWeight: 'bold',
  
        '& span': {
          color: '#66cc99',
          fontWeight: 'bold',
        },
      },
    },
  },
};

export default landingPageStyle;
