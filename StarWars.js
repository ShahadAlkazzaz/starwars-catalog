function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function change1(data)
        {
          document.getElementById("small").innerHTML="";
          document.getElementById('name').innerHTML="";
          document.getElementById('name_plant').innerHTML="";
          document.getElementById('small_plant').innerHTML="";
  
          document.getElementById('loader').style.display="block";
          document.getElementById('loader2').style.display="block";
          await sleep(2000);
          var index=data.value;
          index--;
          var name=dt.results[index].name;
          document.getElementById('name').innerHTML=""+name+"";
          var height=dt.results[index].height;
          var mass=dt.results[index].mass;
          var hair_color=dt.results[index].hair_color;
          var skin_color=dt.results[index].skin_color;
          var eye_color=dt.results[index].eye_color;
          var birth_year=dt.results[index].birth_year;
          var gender=dt.results[index].gender;
         // old_html = document.getElementById("small").innerHTML;
  
          document.getElementById("small").innerHTML="Height: "+height;
          document.getElementById("small").innerHTML=document.getElementById("small").innerHTML+"<br>Mass: "+mass;
   document.getElementById("small").innerHTML=document.getElementById("small").innerHTML+"<br>Hair color: "+hair_color;
          document.getElementById("small").innerHTML=document.getElementById("small").innerHTML+"<br>Skin color: "+skin_color;
          document.getElementById("small").innerHTML=document.getElementById("small").innerHTML+"<br>Eye color: "+eye_color;
          document.getElementById("small").innerHTML=document.getElementById("small").innerHTML+"<br>Birth year: "+birth_year;
          document.getElementById("small").innerHTML=document.getElementById("small").innerHTML+"<br>Gender: "+gender;
          $.get(dt.results[index].homeworld, function(data, status){
           // alert("Data: " + data + "\nStatus: " + status);
            dt_plant=JSON.stringify(data);
            dt_plant=JSON.parse(dt_plant);
            console.log(dt_plant);
            document.getElementById('name_plant').innerHTML=dt_plant.name;     
           // document.getElementById('small_plant').innerHTML=; 
           var data_small_plant="";    
            data_small_plant+="Rotation period: "+dt_plant.rotation_period+"<br>";
            data_small_plant+="Orbital period: "+dt_plant.orbital_period+"<br>";
            data_small_plant+="Diameter: "+dt_plant.diameter+"<br>";
            data_small_plant+="Climate: "+dt_plant.climate+"<br>";
            data_small_plant+="Gravity: "+dt_plant.gravity+"<br>";
            data_small_plant+="Terrain: "+dt_plant.terrain;
            document.getElementById("small_plant").innerHTML=data_small_plant;
            document.getElementById('loader2').style.display="none";
  
            
            
  
          });
          document.getElementById('loader').style.display="none";
  
        }
        async function next()
        {
          x=document.getElementById('luke7').innerText;
          page=x[2];
          if(page==8)
          {
            return ;
          }
          document.getElementById("small").innerHTML="";
          document.getElementById('name').innerHTML="";
          document.getElementById('name_plant').innerHTML="";
          document.getElementById('small_plant').innerHTML="";
          block1="<button class='luke'>Characters</button>";
           block1+=" <div class='loader_' style='display: none;'' id='loader3'></div>";
            block1+="<div class='no_data'></div>";
            block1+="<div class='luke7' id='luke7'><button onclick='pervious()' class='btn'>◁</button> "+(parseInt(page)+1)+" / 8 <button onclick='next()' class='btn'>▷</button> </div>";
        document.getElementById('block1').innerHTML=block1;
        document.getElementById('loader3').style.display="block";
        $.get(dt.next, function(data, status){
           // alert("Data: " + data + "\nStatus: " + status);
            dt=JSON.stringify(data);
            dt=JSON.parse(dt);
            console.log(dt);
            var res="<button class='luke'>Characters</button>";
            for(i=0;i<dt.results.length;i++)
            {
           res+="<button onclick='change1(this)'class='luke"+(i+1)+"' id='luke'"+" value='"+(i+1)+"'>"+dt.results[i].name+"</button>";
            if(i==5)
            break;
           //height
            }
            res+="<div class='luke7' id='luke7'><button onclick='pervious()' class='btn'>◁</button>"+ (parseInt(page)+1) +"/ 8 <button onclick='next()' class='btn'>▷</button> </div>";
  
  //res="";
            document.getElementById('block1').innerHTML=res+"<div class='loader_' style='display: none;' id='loader3'></div>";
  
            
            //document.getElementById('loader3').style.display="none";
  
          });
        }
        async function pervious()
        {
          x=document.getElementById('luke7').innerText;
          page=x[2];
          if(page==1)
          {
            return ;
          }
          document.getElementById("small").innerHTML="";
          document.getElementById('name').innerHTML="";
          document.getElementById('name_plant').innerHTML="";
          document.getElementById('small_plant').innerHTML="";
          block1="<button class='luke'>Characters</button>";
           block1+=" <div class='loader_' style='display: none;'' id='loader3'></div>";
            block1+="<div class='no_data'></div>";
            block1+="<div class='luke7' id='luke7'><button onclick='pervious()' class='btn'>◁</button> "+(parseInt(page)-1)+" / 8 <button onclick='next()' class='btn'>▷</button> </div>";
        document.getElementById('block1').innerHTML=block1;
        document.getElementById('loader3').style.display="block";
        $.get(dt.previous, function(data, status){
           // alert("Data: " + data + "\nStatus: " + status);
            dt=JSON.stringify(data);
            dt=JSON.parse(dt);
            console.log(dt);
            var res="<button class='luke'>Characters</button>";
            for(i=0;i<dt.results.length;i++)
            {
           res+="<button onclick='change1(this)'class='luke"+(i+1)+"' id='luke'"+" value='"+(i+1)+"'>"+dt.results[i].name+"</button>";
            if(i==5)
            break;
           //height
            }
            res+="<div class='luke7' id='luke7'><button onclick='pervious()' class='btn'>◁</button>"+ (parseInt(page)-1) +"/ 8 <button onclick='next()' class='btn'>▷</button> </div>";
  
  //res="";
            document.getElementById('block1').innerHTML=res+"<div class='loader_' style='display: none;' id='loader3'></div>";
  
            
            //document.getElementById('loader3').style.display="none";
  
          });
        }
        $(document).ready(function(){
            
          document.getElementById('loader3').style.display="block";
  
          $.get("https://swapi.dev/api/people/", function(data, status){
           // alert("Data: " + data + "\nStatus: " + status);
            dt=JSON.stringify(data);
            dt=JSON.parse(dt);
            console.log(dt);
            var res="<button class='luke'>Characters</button>";
            for(i=0;i<dt.results.length;i++)
            {
           res+="<button onclick='change1(this)'class='luke"+(i+1)+"' id='luke'"+" value='"+(i+1)+"'>"+dt.results[i].name+"</button>";
            if(i==5)
            break;
           //height
            }
            res+="<div class='luke7' id='luke7'><button onclick='pervious()' class='btn'>◁</button> 1 / 8 <button onclick='next()' class='btn'>▷</button> </div>";
  
  //res="";
            document.getElementById('block1').innerHTML=res+"<div class='loader_' style='display: none;' id='loader3'></div>";
  
            
            //document.getElementById('loader3').style.display="none";
  
          });
   
  
        });
        