export function datak(datalocal,rootdata){
    let aii=[]; 
    let arr=[]; 
   let itemdata = localStorage.getItem(datalocal)? JSON.parse(localStorage.getItem(datalocal)):[];
   let datae=localStorage.getItem(datalocal) ? []: rootdata;    
 
       itemdata.forEach((e)=>datae.push(e))
       
      
   const limmit= 12
   datae.forEach((e, i) => {
       if ((i + 1) % limmit == 0 && i != 0) {
         arr.push(datae.slice(i - (limmit-1), i + 1));
         aii.push(arr.length);
       }
       if (i == datae.length - 1) {
         if ((i + 1) % limmit !== 0) {
           arr.push(datae.slice(i + 1 - ((i + 1) % limmit)));
           aii.push(arr.length);
         }
       }
     });
 return {dataTask: datae , arr:arr, aii :aii}
}