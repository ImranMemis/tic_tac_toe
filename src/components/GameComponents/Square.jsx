import classes from "./Square.module.css"
import x from "../../images/X.jpg";
import ox from "../../images/ox.png";

const Square = (props) =>{

    return (
        <div className= {classes.square} {...props}>
            {props.x ? <img src={x} alt="x"/> : (props.o ? <img src={ox} alt="ox"/> : "" )}
        </div>
    )
}

export default Square