//1. create an xhr object
var request=new XMLHttpRequest();
//2. open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.send a connection
request.send();
//4. once data has been received succesfully,we need to onvert the data
request.onload=function(){
    var data = JSON.parse(this.response);

    var pop=data.filter((ele)=>ele.population < 200000)
    console.log(pop);

    var casia=data.filter((ele)=>ele.region=="Asia")
    console.log(casia);
    
    var total=data.reduce((acc,cv)=>acc+cv.population,0)
    console.log(total);

    var cusd=data.filter((x)=>{
        for(var i in x.currencies){

            if(x.currencies[i].code==='USD'){
                return true;
            }
            
            
        }
        
    
    
    });
    console.log(cusd);
    
    
}
