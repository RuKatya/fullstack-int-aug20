// //For loop
// for(let i=0 ; i<9 ; i++){
//     console.log(i);
// }


// let numbers = [123,123,5,5,6,1,3,4,56,,8,4,55,41,2,655,4,454];

// numbers.forEach(element => {
//     console.log(element);
    
// });


// //Ex1
// for(i=1;i<=1000;i++){

//     console.log(i);
// }

// x=1;
// while(x<=1000){
    
//     console.log(x);
//     x++;
// }

// //Ex2

// let someRandomArry = ['aaa','ccc','wew','qqwq','sadas','asdsad','asdsad','asdasd','asdgf'];

// someRandomArry.map((mov,index)=>{
//     console.log('Movie:',mov,'and his index is:',index);
// })

// //Boom
// for(i=0;i<100;i++){
//     if(i%7==0){
//         console.log(i);
//     }
// }



// let numbers = [123,123,5,5,6,1,3,4,56,34,8,4,55,41,2,655,4,454];
// for(let i in numbers){
//     console.log(`${i}: ${numbers[i]}`);
// }

// for(let i of numbers){
//     console.log(i);
// }

let rootElement = document.getElementById('root');

let numbers = [123,123,5,5,6,1,3,4,56,34,8,4,55,41,2,655,4,454];
let objectCars=
[

    {type:"Fiat", model:"2001", color:"white"},
    {type:"Volvo", model:"2017", color:"black"},
    {type:"BMW", model:"2020", color:"Green"},
    {type:"Opel", model:"2019", color:"Black"}

]

objectCars.forEach(element => {
    rootElement.innerHTML+=`<p>The Brand:${element.type}</p> 
                            <p class="asd">The Model:${element.model}</p>
                            <p>The Color:${element.color}</p>`
});


    
   
