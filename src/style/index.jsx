import { makeStyles } from "@material-ui/core/styles";
import gif1 from "../pic/boxs.gif";
import gif2 from "../pic/boxs2.gif";
import gif3 from "../pic/boxs3.gif";
import gif4 from "../pic/giphy.gif";

const useStyles = makeStyles({
  sidebar: {
    width: 250
  },
  sidebar_right: {
    marginLeft: "auto"
  },
  bgimg: {
    backgroundImage: `url(${gif4})`
  },
  opacity: {
    opacity: 0.9
  }
});

export default useStyles;
