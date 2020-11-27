import Data1 from '../data/data1.json'
import Data from './Data';
import Data2 from '../data/data2.json'
import Drinks from './Drinks';


const Home = () => {
    return ( 
        <main>
            <section id='hero'>
                <h2>A CLASSIC</h2>
                <h1>GIN JOINT</h1>
                <h2>NEW YORK</h2>
            </section>
            <section id="aboutGin">
           
           <div id="aboutText">
               <p>ABOUT</p>
               <h1>THE STORY OF</h1>
               <h1>BATHTUB GIN</h1>
               <p>Gin was the predominant drink in the United States during the Prohibition-Era 1920's and many variations were created. "Bathtub gin" was developed in response to the poor-quality of alcohol that was available at the time.
</p>
               <button>Read More</button>
           </div>
           <div>
           <img src="./assets/img/bild2.png" alt=""/>
           </div>
        </section>
        <section id="corona">
            <p className="textCorona">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!
            </p>

            <div id="json1">
                {Data1.map(index =>  <Data
                dataName = {index.name}
                dataDay = {index.day}
                dataTime = {index.time}
                dataType = {index.type}
                dataImg = {index.img}
                key = {index.id}
            
                />)}
            </div>
        </section>
        <section id="ginTonic">
          <div id="ginTonicText">
                <p>Cocktail & Food Menus</p>
                <h1>Hand Crafted Cocktails & Damn Good Eats</h1>
                
                <p>We mix our gin and other spirits with the finest and freshest fruits, juices, syrups and infusions in cocktails inspired by original recipes.
                </p>
                <button>Read More</button>
            </div>
            
        </section>
        <div id="json2">
        {Data2.map(index2 =>  <Drinks 
            infoDrink = {index2.infoDrinks}
            author = {index2.author}
            drinksImg = {index2.drinks}
            key = {index2.id}
            />)}
        </div>
        
        

        </main>
     );
}
 
export default Home;