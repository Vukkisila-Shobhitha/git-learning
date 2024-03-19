var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    if (request.status==200)
    {
let c=JSON.parse(request.responseText)
c.map((m)=>{
console.log(m.flags.png)
})
}else   
{
request.onerror=function()
{
    console.log("site is error")
}}
    var res = JSON.parse(request.response)
    console.log(res)

   // console.log(res[0].population)

    for(var i=0;i<res.length;i++){
        console.log(res[i].name.common,res[i].region,res[i].subregion,res[i].population)
    }
   
    var countryData=JSON.parse(this.response);
     
}


var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

let a=JSON.stringify(obj1)===JSON.stringify(obj2);

console.log(a)

//var final_data = res.map((ele)=>ele.name.common)
//console.log(final_data);

//print the country names in the array which belongs to asia region 
//var ele_asia = res.filter((ele=>ele.region == "Asia"))
//console.log(ele_asia);

//var res_data = ele_asia.map((ele)=>ele.name.common)
//console.log(res_data);
 

//print those countries names whose area is having more than 100000 sq perimeter
//var ele_country = res.filter((ele=>ele.countries>"100000"))
//console.log(ele_country);