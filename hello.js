
///  ======>   EVENT :           =======>

// let btn1=document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was click");
//     let a=25;
//     a++;
//     console.log(a);
// };

// let xyz=document.querySelector(".xyz");

//xyz.onmouseover = () => {
//     console.log("you are inside xyz")
// };

/// EVENT object :

// let btn1=document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e);
// }


/// listeners :

// let btn1= document.querySelector("#btn1");

// btn1.addEventListener("click",() =>{
//     console.log("button1 was click");
// });



// btn1.addEventListener("click",(evt) =>{
//     console.log("button1 was click- hander2");
//     console.log(evt);
//     console.log(evt,type);
    
// })



///  async await >> promice chains >>callback hell :



// console.log("one")
// console.log("two")   ///  synchronous = sequence me print karana :
// console.log("three") 


/// asynchronous = wait nhi karna next intruction ko print karana na :


// function hello (){
//     console.log("hello")              /// 1st methode 
// }
// setTimeout(hello,2000) // 2s =2000ms;



// setTimeout(() =>{
//     console.log("shahid");   // 2nd methode , arrow function :
// },10000);



// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("shahid");  /// asynchronous = pro netx intruction ko print karna .
// },10000);

// console.log("three");
// console.log("four");



//// callback : function ke undhar dusra function pass karne ko calll back ::::::=>


// function sum (a,b){
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback) {
//     sumCallback(a,b)

// }
// calculator(1,2, sum);




////   callback hell => nested callbacks ::::::>


/// nested :  means loop ke andhar loop & cond ke andhar cond :


//  age let =20;
// if(age>=18){
//     if(age>=60){
//         console.log("senior")
//     }
//     else{
//         console.log("junior")  ///if condtn
//     }
// }
// else{
//     console.log("child");
// }



// ex.2 ======>

// for(let i=0; i<=5; i++){
//     for(let j=0; j<=5; j++){
//         console.log(j);
//     }
// };


// function getData(dataId){
//     console.log("data",dataId)  /// use function
// }
    
// function getData(dataId){
//     setTimeout(()=>{                    /// arrow function & setTimeout use :
//         console.log("data",dataId)
//     },2000)
// };



/// call back hell =======>



// function getData(dataId,getNextDat){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextDat){
//             getNextDat();
//         }
//     },2000)

// };

// getData(1,()=>{
//     console.log("getting data2 ....");
//     getData(2,()=>{                                      //  callback hell :  understand ke liy complicated rahete hai :
//         console.log("getting data3 ....");
//         getData(3,()=>{
//             console.log("getting data4 ...");
//             getData(4);
//         });


//     });
// });



/// promice : callback hell problems  solve karne ke liye  use krte promice :


// let promise= new Promise((resolve,reject)=>{
//         console.log("i am a promise ")

// });












