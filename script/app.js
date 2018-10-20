

function signFun()
{
   var email= document.getElementById('empEmail').value;
   var pwd=document.getElementById('empPwd').value;
   console.log(email,pwd)
   
   window.localStorage.setItem('empEmail',email);
   window.localStorage.setItem('empPassword',pwd);
   

   setTimeout(function(){  window.location.assign("./empLogin.html") }, 3000);
  

   
}


function empLoginFun()
{alert('run')
    var email=window.localStorage.getItem('empEmail');
    var password=window.localStorage.getItem('empPassword');

 var logemail= document.getElementById('empLogmail').value;
   var logpwd=document.getElementById('empLogPwd').value;
    setTimeout(
        function(){
            if(logemail===email && logpwd===password)
            {
                window.location.assign("./empArea.html");
            }

        }
    ,3000);

}


function adLoginFun()
{
  var adMail="admin@gmail.com";
  var password="admin123";

 var logemail= document.getElementById('adLogmail').value;
   var logpwd=document.getElementById('adLogPwd').value;
   
    setTimeout(
        function(){
            if(logemail===adMail && logpwd===password)
            {
                window.location.assign("./adArea.html");
            }

        }
    ,3000);

}
//objects
var modifiedCar = {
    brands: {
        Ferrari: {
                SubBrand: 'f1',
                model: '2012',
                engine: '1.2-L 8v',
                topspeed: '155 km/h (96 mph)',
                bodyType: ' Fibre',
                Speed: "155 km/h (96 mph)",
                Price: '$7.92 Lakh',
               
                

            },
        Suzuki: {
                SubBrand: 'Swift',
                model: '2010–present',
                engine: '1.3 L M13A I4',
                bodyType: ' Fibre',
                Speed: "116 mph",
                Price: 'Rs.1,475,000/-'
            },
        Lamborghini: {
                SubBrand: 'Aventador',
                model: '2011',
                engine: '1,731 kg (3,816 lb)',
                bodyType: ' Fibre',
                Speed: "349 km/h",
                Price: '$450,000/-'
            },
        Mercerdes: {
                SubBrand: 'Benz CL-Class',
                model: '1992–2014 (US)',
                engine: '1993',
                bodyType: '2-door coupé',
                Speed: "250 km/h*",
                Price: '$216,205'
            },
        Porsche: {
                SubBrand: 'Boxster/Cayman',
                model: '1997–present',
                engine: '4.7 L 2UZ-FE V8',
                bodyType: ' Fibre',
                Speed: "around 177 mph.",
                Price: '$67,700'
            },
        Toyota:{
                SubBrand: 'Corolla',
                model: '2000–present',
                engine: '3.4 L 5VZ-FE V6',
                bodyType: ' Fibre',
                Speed: "230+ Kmph",
                Price: '$33,030'
            },
            GMC :{
                SubBrand: '2019 GMC Sierra 1500',
                model: '2019',
                engine: '285-hp, 4.3-liter V-6 ',
                bodyType: ' Fibre',
                Speed: "230+ Kmph",
                Price: '$53,200'
            },
        Bugatti:{
                SubBrand: 'DIVO',
                model: '2018',
                engine: '2018',
                Speed: "236 MPH",
                bodyType: 'Carbon Fibre',
                Price: '€5 million in Europe'
        },
        WMotors:{
            SubBrand: 'The Lykan',
            model: '2017',
            engine: 'Type, 228.6 in3, 3746 cc Flat 6',
            bodyType: 'Coupe Only',
            Speed: "245 mph",
            Price: 'US$3.4 million.'
        },
        Nissan:{
            SubBrand: 'GTR - PROTOTYPE',
            model: '2007',
            engine: '3.8 L VR38DETT twin-turbo V6',
            bodyType: '2-door coupé',
            Speed: "313.8 km/h",
            Price: '$99,990'
        },
        Ford:{
            SubBrand: 'MUSTANG SUPER-HOUSE 2015',
            model: '2015',
            engine: '2.3 L EcoBoost I4',
            bodyType: '2-door convertible',
            Speed: "13.9 sec @ 98 mph",
            Price: '$29,925'
        },
        Honda:{
            SubBrand: 'Civic (tenth generation)',
            model: '2016—present',
            engine: '1.0 L P10A2 turbocharged I3',
            bodyType: '5-door hatchback (FK7/FK4)',
            Speed: "240 miles in 60 sec",
            Price: 'US$35,000'
        },
        Alfa_Romeo:{
            SubBrand: '4C Spider',
            model: '2019',
            engine: '237-hp, 1.7-liter I-4 (premium)',
            bodyType: 'Chrome tip exhaust',
            Speed: "257 km/h",
            Price: ' $66,900'
         },
        Dodge:{
            SubBrand: 'RAM, CHARGER, VIPER',
            model: '1999',
            engine: '1993',
            bodyType: ' Fibre',
            Speed: "240 miles in 60 sec",
            Price: 'N/A'
        },
        Acura:{
            SubBrand: 'RLX Sport Hybrid',
            model: '2019',
            engine: '310-hp, 3.5-liter V-6 (premium)',
            bodyType: 'Chrome bodyside insert',
            Speed: "130 mph",
            Price: 'N/A'
        },
        Chevrolet:{
            SubBrand: 'Corvette',
            model: '2019',
            engine: '455-hp, 6.2-liter V-8 (premium)',
            bodyType: 'Black w/chrome accents grille',
            Speed: "212 MPH",
            Price: 'N/A'
        }
    }
}


var table = document.getElementById('data-table');      
for(var key in modifiedCar){
    for(var key2 in modifiedCar[key]){
            table.innerHTML += 
            '<tr>' + '<td>' + key2 + '</td>' + 
            '<td>' + modifiedCar[key][key2].SubBrand + '</td>'+
            '<td>' + modifiedCar[key][key2].model + '</td>' +
            '<td>' + modifiedCar[key][key2].engine + '</td>' +
            '<td>' + modifiedCar[key][key2].Speed + '</td>'+
            '<td>' + modifiedCar[key][key2].bodyType + '</td>'  +
            '<td>' + modifiedCar[key][key2].Price + '</td>'+
           
            '<td>' + "<button >"+"EDIT"+"</button>" + '</td>'+
            '<td>' + "<button onclick='delfun()'>"+"DELETE"+"</button>" + '</td>' 
            + '</tr>';
         }
     }
 


var flag = false;
var error = document.getElementById('error');
function myFun(){
var data = document.getElementById('search').value;
if(data != " " && data != "" && data != undefined){
    var table = document.getElementById('data-table');      
    for(var key in modifiedCar){
        for(var key2 in modifiedCar[key]){
            if(data.toLowerCase() === key2.toLowerCase()){
                    table.innerHTML = "";
                    table.innerHTML += 
                    '<tr>' + '<th>'+ 'NAME' + '</th>' 
                        + '<th>'+ 'SUBNAME' + '</th>'
                        + '<th>'+ 'MODEL' + '</th>'
                        + '<th>'+ 'ENGINE' + '</th>'
                        + '<th>'+ 'SPEED' + '</th>'
                        + '<th>'+ 'BODYTYPE' + '</th>'
                        + '<th>'+ 'PRICE' + '</th>' + '</tr>' +
                        

                    '<tr>' + '<td>' + key2 + '</td>' + 
                    '<td>' + modifiedCar[key][key2].SubBrand + '</td>'+
                    '<td>' + modifiedCar[key][key2].model + '</td>' +
                    '<td>' + modifiedCar[key][key2].engine + '</td>' +
                    '<td>' + modifiedCar[key][key2].Speed + '</td>'+
                    '<td>' + modifiedCar[key][key2].bodyType + '</td>'  +
                    '<td>' + modifiedCar[key][key2].Price + '</td>'+
                    
                    '<td>' + "<button>"+"EDIT"+"</button>" + '</td>'+
                    '<td>' + "<button onclick='delfun()'>"+"DELETE"+"</button>" + '</td>' 
                    + '</tr>';
                    flag = true;
                }
            }
        }
    }
    if(flag === false){
        error.innerHTML = "Car Data Not Found";
    }else{
        error.innerHTML = '';
    }
}

function delfun(){
    var inp=prompt("Plz Rewrite Name to Confirm Delete!!");
   var tbl= document.getElementById('data-table');
   
   console.log(tbl.childElementCount);
    

}

function reload(){

   
var reload = document.getElementById('button').innerHTML;
window.location.href = './index.html'
reload = window.location.href;

}



