let fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(inputArr);

//-s => convert from multiple line breaks to singlular line breaks  ,
//-b , -n 
//filename 

let optionsArr =[];
let fileArr = [];
for(let i=0; i<inputArr.length; i++)
{
    if(inputArr[i].charAt(0)=="-")
    {
        optionsArr.push(inputArr[i]);
    }

    else{
        fileArr.push(inputArr[i]);
    }
}

// console.log(optionsArr);
// console.log(fileArr);

function fn() {

 let bothBNpresent = optionsArr.includes("-b") && optionsArr.includes("-n");
     if(bothBNpresent==true)
     {
         console.log("either b can be given as input or n can be given");         
         return;         
         
     }

     for(let i=0; i<fileArr.length;i++)
     {
         let isPresent = fs.existsSync(fileArr[i]);
         if(isPresent==false)
         {
             console.log("please input correct filename");
             return;
         }
     }
 



let content ="";
for(let i=0; i<fileArr.length; i++)
{
    let fileContent = fs.readFileSync(fileArr[i]);
    content += fileContent + "\r\n";
}
let buffer =[];
 buffer = content.split("\r\n");
let isSPresent = optionsArr.includes("-s");
if(isSPresent==true){
    for(let i=1 ;i<buffer.length; i++)
    {
        if(buffer[i]=="" && buffer[i-1]=="")
        {
            buffer[i]=null;
            //buffer[i-1]=null;
        }

        else if(buffer[i]=="" && buffer[i-1]==null)
        {
            buffer[i]=null;
        }
    }
}

let isNpresent = optionsArr.includes("-n");
if(isNpresent == true){
    for(let i=0; i<buffer.length; i++)
    {
        buffer[i] = `${i+1}.  ${buffer[i]}`;
        // console.log("content", content[i]);
        // console.log("hello");
    }
}


 let counter =1;
  let isBpresent = optionsArr.includes("-b");
 if(isBpresent == true){
    
     for(let i=0; i<buffer.length; i++)
     {   if(buffer[i] != "")
        {
            buffer[i] = `${counter} ${buffer[i]}`;
            counter++;
        }
         
         // console.log("content", content[i]);
         // console.log("hello");
   }
}
     console.log(buffer.join("\n"));


}


     fn();

// let tempArr =[];

// for(let i=0; i<buffer.length; i++){
//     if(buffer[i]!=null)
//     {
//         tempArr.push(buffer[i]);
//     }
// }

// buffer = tempArr;

// console.log(buffer)
