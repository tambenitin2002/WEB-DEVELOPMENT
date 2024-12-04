async function x() {
    let data= await fetch("https://dummyjson.com/recipes");
    console.log(data);
    let res= await data.json();
    console.log(res);
    let output="";
    res.recipes.map((val)=>{
        output+=`
        <div>
        <img src="${val.image}" height="200px" width="200px"/>;
        </div>
        `
    });
    document.getElementById("root").innerHTML=output;
}
x();