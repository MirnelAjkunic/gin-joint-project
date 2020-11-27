const Info = () => {
    return ( 
        <section>
            <nav id="infoNav">
                <img src="../assets/img/stemp.png" alt=""/>
                <div>
                    <h3>Find Us</h3>
                    <p>132 9th Avenue</p>
                    <p>New York, NY 10011</p>
                    <p>646-559-1671</p>
                    <p>Info@btgnyc.com</p>
                </div>
                <div>
                <h3>Hours of Operation</h3>
                <div className="infoHours">
                    <p>Monday</p>
                    <p>8AM - 4PM</p>
                    <p>Tuesday - Friday</p>
                    <p>8AM - 10PM</p>
                    <p>Saturday</p>
                    <p>9AM - 10PM</p>
                    <p>Sunday</p>   
                    <p>9AM - 4PM</p>
                    </div>
                </div>
            </nav>
        </section>
     );
}
 
export default Info;