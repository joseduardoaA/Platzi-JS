let edades=[5,10,20,18];

for(i=0;i<4;i++){
    if(edades[i]>=18){
        console.log('es mayor de edad');
    }else{
        console.log('es menor de edad');
    }
}
console.log('---------------------while-------------------');
let n=0;
while(n<4){
    if(edades[n]>=18){
        console.log('es mayor de edad');
    }else{
        console.log('es menor de edad');
    }  
    n++;
}
console.log('---------------------do-while-------------------');
let r=0;
do{
    if(edades[r]>=18){
        console.log('es mayor de edad');
    }else{
        console.log('es menor de edad');
    }  
    r++; 
}while(r<4);