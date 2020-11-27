const Data = (props) => {
    return ( 
        <section id="dataInfo">
            <div id="img" style={{background:`url(${props.dataImg})`,backgroundPosition:'center',backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",color:"#ffffff",marginBottom:"5%"}}>
                <h1>{props.dataName}</h1>
            </div>
            <div>
                <h2 id="day">{props.dataDay}</h2>
                <p id="time">{props.dataTime}</p>
                <p id="type">{props.dataType}</p>
            </div>
        </section>
     );
}
 
export default Data;