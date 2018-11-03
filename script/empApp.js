
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
      
            document.getElementById("data-table").innerHTML+=

            "<tr>"+
            "<th>"+i+"</th>"+
            "<th>"+ localDataParse[i].des+"</th>"+
           "<th>"+ localDataParse[i].brnd+"</th>"+
           "<th>"+ localDataParse[i].prce+"</th>"+
          
           "</tr>"
        
        }
    }

    function myFun()
    {
  
        document.getElementById("data-table").innerHTML="";
       var sval= document.getElementById("search").value;
       var localData=localStorage.getItem("allProducts");
       var localDataParse=JSON.parse(localData);
       for(var i in localDataParse)
       {
           if(localDataParse[i].brnd.toLowerCase()==sval.toLowerCase()){
               document.getElementById("data-table").innerHTML+=
   
               "<tr>"+
               "<th>"+i+"</th>"+
               "<th>"+ localDataParse[i].des+"</th>"+
              "<th>"+ localDataParse[i].brnd+"</th>"+
              "<th>"+ localDataParse[i].prce+"</th>"+
             
              "</tr>"
           
           }
          }
    }
  
  
    function emp_reload(){

        window.location.href = './empArea.html'
        
     }  

