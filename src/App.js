import logo from './logo.svg';
import './_App.css';
import {Typography,AppBar} from "@material-ui/core"
import VideoPlayer from "./components/VideoPlayer"
import Notification from "./components/Notification"
import Options from "./components/Options"
import {makeStyles} from "@material-ui/core/styles"
const useStyles=makeStyles((theme)=>({
  appBar: {
   borderRadius: 15,
   margin: '10px 100px',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   width: '600px',
   border: '2px solid black',

   [theme.breakpoints.down('xs')]: {
     width: '90%',
   },
 },
 image: {
   marginLeft: '15px',
 },
 wrapper: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   width: '100%',
 },
}))

function App() {
  const classes=useStyles()


  return (
    <div className={classes.wrapper}>
      <AppBar
        position="static"
        color="inherit"
        className={classes.appBar}
      >
        <Typography
          variant="h4"
          align="center"
        >Santra Meet</Typography>

        </AppBar>
        {/* videoplayer*/}
        <VideoPlayer/>
        <Options>
          <Notification/>
        </Options>
        {/*options => notification*/}


    </div>
  );
}

export default App;
