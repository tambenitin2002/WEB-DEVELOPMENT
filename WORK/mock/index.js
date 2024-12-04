async function x(){
    
    let data=await fetch ('https://dummyjson.com/recipes')
    console.log(data);
    let finalData=await data.json()
    console.log(finalData);
    var output="";
    finalData.recipes.map((item)=>{
            
           output+=`<div>
            <img src="${item.image}" height="500px" width=500px">
           
             <div>
           
            <button>Add Cart</button>
             </div>
            </div>

            `
           
    })
    document.getElementById('root').innerHTML=output;
}
x()