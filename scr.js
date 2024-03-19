var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res)
    //using reducefunction find the sum of the total population of all the countries 
    // cv represents the array elements
    // acc represnts the value
    var pop_data = res.reduce((acc,cv)=>acc+cv.population,0)
    console.log(pop_data);
}

