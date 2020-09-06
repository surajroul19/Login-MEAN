const response=[{
    "name":"Kappu",
    "product":"Chair",
    "description":"",
    "col-smor":"green",
    "pricePerUnit":"2000",
    "ratings":4,
    "brand":"killer",
    "category":"Chair"
},
{
    "name":"Kappu",
    "product":"Chair",
    "description":"",
    "col-smor":"green",
    "pricePerUnit":"2000",
    "ratings":4,
    "brand":"killer",
    "category":"Chair"
},
{
    "name":"Kappu",
    "product":"Chair",
    "description":"",
    "col-smor":"green",
    "pricePerUnit":"2000",
    "ratings":4,
    "brand":"killer",
    "category":"Chair"
},{
    "name":"Kappu",
    "product":"Chair",
    "description":"",
    "col-smor":"green",
    "pricePerUnit":"2000",
    "ratings":4,
    "brand":"killer",
    "category":"Chair"
}]
var object=response;

function call(){
var output=document.getElementById('yes')
output.innerHTML=object.map(prd=>{
    return`
    <card class="col-sm-3" onclick=getDetails(`+JSON.stringify(prd)+`)>
    <img src="2.JPG" alt="" height="60%" width="100%">
    <li>${prd.product}</li>
    <li>${prd.name}</li>
    </card>`
})
}

function display(){
    var output=document.getElementById('yes')
    output.innerHTML=object.map(prd=>{
        return`
        <card class="col-sm-10">
        <div class="row">
        <div class="col-sm-6">
        <img src="2.JPG" alt="" height="100%" width="100%" class="col-sm-4">
        </div>
        
        <div class="col-sm-4">
        <p>${prd.product}</p>
        <h2>${prd.name}</h2>
        <p>${prd.description}</p>
        <p>${prd.category}</p>
        <p>${prd.pricePerUnit}</p>
        </div>
        </div>
        </card>`
    })
}

function getDetails(data){
    object=[data]
    display()
}

function goBack(){
    object=response;
    call()
}
