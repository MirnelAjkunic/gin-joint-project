const Drinks = (props) => {
    console.log(props);
    return ( 
        <section id="drink">
            <div id="fronts">
                <img src="./assets/img/insta.png" alt=""/>
                <div id="fronts_img" style={{background:`url(${props.drinksImg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"40%"}}>

                </div>
                <h4>{props.infoDrink}</h4>
                <p>{props.author}</p>
            </div>

        </section> 
     );
}
 
export default Drinks;