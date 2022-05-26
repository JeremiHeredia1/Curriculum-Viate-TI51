var jsonUrl = 'Info.json'
function getData()
{
    fetch('jsonUrl')
    .then(response =>response.json())
    .then (data=> formatMovies(data));  
}

function getElement(data)
{
    var obj=data;
    document.getElementById('datos').innerHTML=res;
    console.log(res); 
}

getData();