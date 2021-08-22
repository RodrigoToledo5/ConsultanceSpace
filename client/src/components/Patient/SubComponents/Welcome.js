import { Box, Typography, makeStyles, responsiveFontSizes } from "@material-ui/core";
import Appointments from './Appointment/Appointments'
import NewAppointment from './Appointment/NewAppointment'
import Carousel from "react-material-ui-carousel";
import img1 from "../../../assets/img/etc/welcome.jpg";
import img2 from "../../../assets/img/etc/welcome1.jpg";
import img3 from "../../../assets/img/etc/welcome2.jpg";
const useStyle = makeStyles((theme) => ({
    text: {
      color: "#000",
      fontFamily:"Lato",
      fontSize:"5vw",
      textAlign:"center",
      padding:"30px"
    },
    box: {
      padding: "10px",
      paddingLeft: "50px",
      paddingRight: "50px",
      marginLeft: "10px",
      marginRight: "10px",
      marginBottom: "10px",
      display: "flex",
      flexDirection: "column",
      backgroundImage:`url(${img1})`,
      borderRadius: "10px",
      color: "#159DE9",
      backgroundSize:"cover",
      minHeight:"95vh",
      Width:"10vh",
    },
    textcointainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems: "center"
    }
    
  }));

export default function Welcome(){
  const itemHeight = "400px";
  const classes =useStyle();

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
        <Item className={classes.box} key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const useStyle = makeStyles(theme=>( {
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
    fontSize: '1.2rem',
    '@media (max-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  }));

  const classes=useStyle();

  return (
    <div elevation={3} className={classes.paperContainer}>
      {/* <div className={classes.textContainer}>
        <div className={classes.opaqueFilter}>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
        </div>
      </div> */}
    </div>
  );
}
