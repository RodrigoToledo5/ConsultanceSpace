export const GET_ACTION='GET_ACTION';
export const CONSTANT_POST='CONSTANT_POST';



export const getAction =(offset)=>(dispatch)=> { 
    fetch(`http://localhost:3001/get/?offset=${offset}`)
    .then(response => response.json())
    .then(json => {
            dispatch({
                type: 'GET_ACTION',
                payload: json });
         
        });
            
}

export const postAction =(offset)=>(dispatch)=> { // no es el formato de post
    fetch(`http://localhost:3001/post/?offset=${offset}`)
    .then(response => response.json())
    .then(json => {
            dispatch({
                type: 'CONSTANT_POST',
                payload: json });
         
        });
            
}


  