


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


function Product(des, brnd,prce){
    
    this.des = des;
    this.brnd = brnd;
    this.prce = prce;
    
} 

function demoData(){
    var allProducts = [];
    var getProducts = localStorage.getItem("allProducts");
    if(getProducts === null){
        var product1 = new Product("Samsung S7 Edge",  "Samsung", "$60");
        var product2 = new Product("iPhone 7S Edge",  "iPhone", "$50");
        var product3 = new Product("Vivo V11 Pro", "Vivo", "$25");
        var product4 = new Product("Huawei Nova 3i", "Huawei", "$40");
        var product5 = new Product("Oppo F9", "Oppo", "$38");
        allProducts.push(product1, product2, product3, product4, product5);   
        var storeProducts = localStorage.setItem("allProducts", JSON.stringify(allProducts));
    }
    return addProducts();
}

function addProducts(){
    
    var localData=localStorage.getItem("allProducts");
    var localDataParse=JSON.parse(localData);
    // console.log(localDataParse);
    for(var i in localDataParse)
    {
      
            document.getElementById("data-table-1").innerHTML+=

            "<tr>"+
            "<th>"+i+"</th>"+
            "<th>"+ localDataParse[i].des+"</th>"+
           "<th>"+ localDataParse[i].brnd+"</th>"+
           "<th>"+ localDataParse[i].prce+"</th>"+
          
           "</tr>"
        
        }
    }
            
    function editFun(){
      
        
    var sNo=prompt("enter product id");
    var des=prompt("Enter Description Of Product");
    var brnd=prompt("Enter Brand Name");
    var prce=prompt("Enter Price");

    var localData=localStorage.getItem("allProducts");
    var localDataParse=JSON.parse(localData);
   
    var product11 = new Product(des, brnd, prce);

    // var product11 = new Product("S Edge", "5", "50000", "Samsung", "60");


   
    for(var i in localDataParse){

    if(i===sNo)
    {

       
        console.log(localDataParse[i]);
        var getProducts = localStorage.getItem("allProducts");
        var getAllProductsToObj = JSON.parse(getProducts);
        getAllProductsToObj[i]=product11;
        var storeProducts = localStorage.setItem("allProducts", JSON.stringify(getAllProductsToObj));
        
   
    }
}

ad_reload();
      
return addProducts();

       

    }

function delFun(){

    var sNo=prompt("enter product id");
    var localData=localStorage.getItem("allProducts");
    var localDataParse=JSON.parse(localData);
    var table=document.getElementById("data-table-1");
    var tr=table.getElementsByTagName("tr");
    
  

   
    for(var i in localDataParse){

    if(i===sNo)
    {

        alert("gotcha");
        console.log(localDataParse[i]);
        var getProducts = localStorage.getItem("allProducts");
        var getAllProductsToObj = JSON.parse(getProducts);
        getAllProductsToObj.splice((Number(i)), 1)
        var storeProducts = localStorage.setItem("allProducts", JSON.stringify(getAllProductsToObj));
        
      console.log(localDataParse[i]);
    tr[i].innerHTML="";
        break;
    }
}


ad_reload();
return addProducts();

}


function insertFun()
{
    var des=prompt("Enter Description Of Product");
    var brnd=prompt("Enter Brand Name");
    var prce=prompt("Enter Price");

   
    var getProducts = localStorage.getItem("allProducts");
    var getAllProductsToObj = JSON.parse(getProducts);
    var product11 = new Product(des, brnd, prce);
     
    getAllProductsToObj.push(product11);
    var storeProducts = localStorage.setItem("allProducts", JSON.stringify(getAllProductsToObj));
    ad_reload();
    return addProducts();
}


function ad_reload(){

   
    window.location.href = './adArea.html'
 
    
    }

    

  function myFun()
  {

      document.getElementById("data-table-1").innerHTML="";
     var sval= document.getElementById("search").value;
     var localData=localStorage.getItem("allProducts");
     var localDataParse=JSON.parse(localData);
     for(var i in localDataParse)
     {
         if(localDataParse[i].brnd.toLowerCase()==sval.toLowerCase()){
             document.getElementById("data-table-1").innerHTML+=
 
             "<tr>"+
             "<th>"+i+"</th>"+
             "<th>"+ localDataParse[i].des+"</th>"+
            "<th>"+ localDataParse[i].brnd+"</th>"+
            "<th>"+ localDataParse[i].prce+"</th>"+
           
            "</tr>"
         
         }
        }
  }


















