/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Home.css';
var I=-1;




class Home extends React.Component {


  handleClick1 = () => {
    I=0;
    document.getElementById("Image1").style.zIndex=10;
    document.getElementById("Image2").style.zIndex=9;
    document.getElementById("Image3").style.zIndex=9;
    document.getElementById("Image4").style.zIndex=9;
    document.getElementById("Image5").style.zIndex=9;
    document.getElementById("Point1").style.opacity=1;
    document.getElementById("Point2").style.opacity=0.5;
    document.getElementById("Point3").style.opacity=0.5;
    document.getElementById("Point4").style.opacity=0.5;
    document.getElementById("Point5").style.opacity=0.5;
    document.getElementById("Texte1").style.display='block';
    document.getElementById("Texte2").style.display='none';
    document.getElementById("Texte3").style.display='none';
    document.getElementById("Texte4").style.display='none';
    document.getElementById("Texte5").style.display='none';


  }
  handleClick2 = () => {
    I=1;

    document.getElementById("Image2").style.zIndex=10;
    document.getElementById("Image1").style.zIndex=9;
    document.getElementById("Image3").style.zIndex=9;
    document.getElementById("Image4").style.zIndex=9;
    document.getElementById("Image5").style.zIndex=9;
    document.getElementById("Point2").style.opacity=1;
    document.getElementById("Point4").style.opacity=0.5;
    document.getElementById("Point3").style.opacity=0.5;
    document.getElementById("Point1").style.opacity=0.5;
    document.getElementById("Point5").style.opacity=0.5;
    document.getElementById("Texte2").style.display='block';
    document.getElementById("Texte1").style.display='none';
    document.getElementById("Texte3").style.display='none';
    document.getElementById("Texte4").style.display='none';
    document.getElementById("Texte5").style.display='none';
  }
  handleClick3 = () => {
    I=2;

    document.getElementById("Image3").style.zIndex=10;
    document.getElementById("Image3").style.transition=1000;

    document.getElementById("Image2").style.zIndex=9;
    document.getElementById("Image1").style.zIndex=9;
    document.getElementById("Image4").style.zIndex=9;
    document.getElementById("Image5").style.zIndex=9;
    document.getElementById("Point3").style.opacity=1;
    document.getElementById("Point2").style.opacity=0.5;
    document.getElementById("Point4").style.opacity=0.5;
    document.getElementById("Point1").style.opacity=0.5;
    document.getElementById("Point5").style.opacity=0.5;
    document.getElementById("Texte3").style.display='block';
    document.getElementById("Texte2").style.display='none';
    document.getElementById("Texte1").style.display='none';
    document.getElementById("Texte4").style.display='none';
    document.getElementById("Texte5").style.display='none';
  }
  handleClick4 = () => {
    I=3;

    document.getElementById("Image4").style.zIndex=10;
    document.getElementById("Image2").style.zIndex=9;
    document.getElementById("Image3").style.zIndex=9;
    document.getElementById("Image1").style.zIndex=9;
    document.getElementById("Image5").style.zIndex=9;
    document.getElementById("Point4").style.opacity=1;
    document.getElementById("Point2").style.opacity=0.5;
    document.getElementById("Point3").style.opacity=0.5;
    document.getElementById("Point1").style.opacity=0.5;
    document.getElementById("Point5").style.opacity=0.5;
    document.getElementById("Texte4").style.display='block';
    document.getElementById("Texte2").style.display='none';
    document.getElementById("Texte3").style.display='none';
    document.getElementById("Texte1").style.display='none';
    document.getElementById("Texte5").style.display='none';
  }
  handleClick5 = () => {
    I=4;

    document.getElementById("Image5").style.zIndex=10;
    document.getElementById("Image2").style.zIndex=9;
    document.getElementById("Image3").style.zIndex=9;
    document.getElementById("Image4").style.zIndex=9;
    document.getElementById("Image1").style.zIndex=9;
    document.getElementById("Point5").style.opacity=1;
    document.getElementById("Point2").style.opacity=0.5;
    document.getElementById("Point3").style.opacity=0.5;
    document.getElementById("Point1").style.opacity=0.5;
    document.getElementById("Point4").style.opacity=0.5;
    document.getElementById("Texte5").style.display='block';
    document.getElementById("Texte2").style.display='none';
    document.getElementById("Texte3").style.display='none';
    document.getElementById("Texte4").style.display='none';
    document.getElementById("Texte1").style.display='none';
  }

  suivante= () => {
    if (I===0){
     this.handleClick1();
    }
    if(I===1){
      this.handleClick2();
      ;
    }
    if(I===2){
      this.handleClick3();
      ;
    }
    if(I===3){
      this.handleClick4();
    }
    if(I===4){
      this.handleClick5();
    I=-1;
    }
    I=I+1 ;      
    setTimeout(this.suivante, 10000) ;
  }

  render(){
  return (
    <div>
        <div id="Bloc2">

          <img className="PetitPoint"src="Cercle.png" id="Point1" onClick={this.handleClick1.bind(this)}/>
          <img className="PetitPoint"src="Cercle.png" id="Point2"onClick={this.handleClick2.bind(this)}/>
          <img className="PetitPoint"src="Cercle.png" id="Point3"onClick={this.handleClick3.bind(this)}/>
          <img className="PetitPoint"src="Cercle.png" id="Point4"onClick={this.handleClick4.bind(this)}/>
          <img className="PetitPoint" src="Cercle.png" id="Point5"onClick={this.handleClick5.bind(this)}/>

        </div>
        <div id="TRUC">
          <img className="Image" id="Image1" src="1.jpg" /> 
          <img className="Image" id="Image2" src="2.jpeg" /> 
          <img className="Image" id="Image3" src="3.jpeg" /> 
          <img className="Image" id="Image4" src="4.jpeg" /> 
          <img className="Image" id="Image5" src="5.jpeg" /> 
        </div>
        <div id="Texte">
        <div className="Texte" id="Texte1">Venez découvrir l'Aubrac, Marchastel et sa tranquillité. <br/><br/>
            Profitez du calme dans nos gîtes ou dans nos chambres d'hôtes avec piscine chauffée et sauna.
        </div>
        <div className="Texte" id="Texte2">Nos 2 chambres d'hôtes sont prêtes à vous acceuillir <br/><br/>
          Entre modernité et authenticité, Profiter du chateau pour vous reposer et découvrir l'Aubrac.     
        </div>
        <div className="Texte" id="Texte3">Sur place, vous pourrez vous détendre dans la piscine <br/><br/>
            Profiter d'un bon Sauna après une belle journée et encore d'autres d'avantages à découvrir.
        </div>
        <div className="Texte" id="Texte4">Sur place, vous pourrez vous détendre dans la piscine <br/><br/>
            Profiter d'un bon Sauna après une belle journée et encore d'autres d'avantages à découvrir.
        </div>
        <div className="Texte" id="Texte5">Profitez des paysages<br/><br/>
         Les jonquilles et les narcisses du printemps.<br/>
         Le plaisir d'un beau couché de soleil en été.<br/>
         Les paysages d'automne avec leurs couleurs magnifiques.<br/>
         Et l'hiver avec ses paysages en noir et blanc époustouflants. <br/><br/>
        
        </div>

        </div>



        {this.suivante()}

    </div>
  );
}
}
 
export default Home;