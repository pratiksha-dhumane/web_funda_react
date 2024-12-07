import Form from "./Form";

const Card=({title})=>{
    return(
        <div className="Card">
            <h1>This is my card !</h1>
            <div className="container">
                <div className="row">
                    <div className="col col-md-4 ">{title===5 ? "five":"other"}</div> //conditional rendering acts like if else
                    <div className="col col-md-4" style={title===5 ? {color:"red"}: {color:"blue"}}>Card Info</div>
                    <div className="col col-md-4">Card Info</div>
                    <div className="col col-md-4">Card Info</div>


                </div>
            </div>
            <Form/>
        </div>
    )
}
export default Card;