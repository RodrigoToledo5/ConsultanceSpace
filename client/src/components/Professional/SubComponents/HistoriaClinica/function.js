export default function contadordeletras(string,flag=false){//cuenta hasta 30
   
    var aux=string.substring(0,30);
    //console.log(aux)
    ///console.log(string)
    if(typeof(aux)==="string"&&aux.length<30){
        
        
        return flag;   
    }
    else{
        if(typeof(string)==="string"&&string.length>=30){

            if(typeof(aux)==="string"&&aux.includes(' '))return flag=false
            else {
                flag=true;
                contadordeletras(string.substring(30),flag);
            
            }
        }
    }
}