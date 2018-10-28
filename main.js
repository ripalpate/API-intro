

const requestData = ()=>{
    return new Promise ((resolve, reject)=>{
   
    $.ajax('https://data.nashville.gov/resource/8zc7-2afq.json')
        .done((data)=>{
            resolve(data);
            console.log(data)
        }).fail((error)=> {
            reject(error);
        })
    
    })
}
const writeToDom = (resources) => {    
    let domString = '';
   resources.forEach((resource)=>{         
       domString += `<div>
                       <h3>${resource.contact}</h3>
                       <p>${resource.contact_type}</p>
                       <p>${resource.location_1_address}</p>
                       <p>${resource.location_1_city}</p>
                       <p>${resource.location_1_state}</p>
                   </div>
                   `
})
$('#resources').html(domString);
}

const displayData = () => {
    requestData().then((data)=>{
        writeToDom(data);
    })
}

displayData();

