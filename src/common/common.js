export function datak(datalocal,rootdata){
    let arr=[]; 
   let itemdata = localStorage.getItem(datalocal)? JSON.parse(localStorage.getItem(datalocal)):[];
   let datae=localStorage.getItem(datalocal) ? []: rootdata;    
 
       itemdata.forEach((e)=>datae.push(e))
       
      
   const limmit= 12
   datae.forEach((e, i) => {
       if ((i + 1) % limmit == 0 && i != 0) {
         arr.push(datae.slice(i - (limmit-1), i + 1));
       }
       if (i == datae.length - 1) {
         if ((i + 1) % limmit !== 0) {
           arr.push(datae.slice(i + 1 - ((i + 1) % limmit)));
         }
       }
     });
 return {dataTask: datae , arr:arr}
}

export function add() {
  return [    
    { title: "1", name: "v", mess: "j" , stt: "New"},
    { title: "2", name: "v", mess: "j" , stt: "Done"},
    { title: "3", name: "v", mess: "j" , stt: "New"},
    { title: "4", name: "v", mess: "j" , stt: "New"},
    { title: "5", name: "v", mess: "j" , stt: "New"},
    { title: "6", name: "v", mess: "j" , stt: "New"},
    { title: "7", name: "v", mess: "j" , stt: "New"},
    { title: "8", name: "v", mess: "j" , stt: "New"},
    { title: "9", name: "v", mess: "j" , stt: "New"},
    { title: "10", name: "v", mess: "j" , stt: "New"},
    { title: "11", name: "v", mess: "j" , stt: "New"},  
    { title: "12", name: "v", stt: "New", mess: "adsasddasdasdasdasdasdasdasda asd asd as asd as as dasd asd asa  asd asd as asd asd as" },
    { title: "13", name: "v", mess: "j" , stt: "New"},    
    { title: "14", name: "v", mess: "j" , stt: "New"},
    { title: "15", name: "v", mess: "j" , stt: "New"}, 
    { title: "16", name: "v", mess: "j" , stt: "New"},
    { title: "17", name: "v", mess: "j" , stt: "New"},
    { title: "18", name: "v", mess: "j" , stt: "New"},
    { title: "19", name: "v", mess: "j" , stt: "New"},
    { title: "20", name: "v", mess: "j" , stt: "New"},
    { title: "21", name: "v", mess: "j" , stt: "New"},
    { title: "22", name: "v", mess: "j" , stt: "New"},
    { title: "23", name: "v", mess: "j" , stt: "New"},
    { title: "24", name: "v", mess: "j" , stt: "New"},
    { title: "25", name: "v", mess: "j" , stt: "New"},
    { title: "26", name: "v", mess: "j" , stt: "New"},
    { title: "27", name: "v", mess: "j" , stt: "New"},
    { title: "28", name: "v", mess: "j" , stt: "New"},
    { title: "29", name: "v", mess: "j" , stt: "New"},
    { title: "30", name: "v", mess: "j" , stt: "New"},    
    { title: "31", name: "v", mess: "j" , stt: "New"},    
    { title: "32", name: "v", mess: "j" , stt: "New"},    
    { title: "33", name: "v", mess: "j" , stt: "New"},    
    { title: "34", name: "v", mess: "j" , stt: "New"},
    { title: "35", name: "v", mess: "j" , stt: "New"},
    { title: "36", name: "v", mess: "j" , stt: "New"},
    { title: "37", name: "v", mess: "j" , stt: "New"},
    { title: "38", name: "v", mess: "j" , stt: "New"},
    { title: "39", name: "v", mess: "j" , stt: "New"},    
    { title: "40", name: "v", mess: "j" , stt: "New"},    
    { title: "41", name: "v", mess: "j" , stt: "New"},    
    { title: "42", name: "v", mess: "j" , stt: "New"},    
    { title: "43", name: "v", mess: "j" , stt: "New"},
    { title: "44", name: "v", mess: "j" , stt: "New"},
    { title: "45", name: "v", mess: "j" , stt: "New"},    
    { title: "46", name: "v", mess: "j" , stt: "New"},    
    { title: "47", name: "v", mess: "j" , stt: "New"},    
    { title: "48", name: "v", mess: "j" , stt: "New"},    
    { title: "49", name: "v", mess: "j" , stt: "New"},
    { title: "50", name: "v", mess: "j" , stt: "New"},
    { title: "51", name: "v", mess: "j" , stt: "New"},    
    { title: "52", name: "v", mess: "j" , stt: "New"},    
    { title: "53", name: "v", mess: "j" , stt: "New"},    
    { title: "54", name: "v", mess: "j" , stt: "New"},    
    { title: "55", name: "v", mess: "j" , stt: "New"},    
    { title: "56", name: "v", mess: "j" , stt: "New"},    
    { title: "57", name: "v",stt: "New", mess: "adsasddasdasdasdasdasdasdasda asd asd as asd as as dasd asd asa  asd asd as asd asd as" },   
   
  ];
}
export function runtime(e,temparr){

  if (e<1){        //nếu trang đứng có index nhỏ hơn 1 thì nó sẽ ẩn đi các button có index<=2 
     document.querySelectorAll(".check button").forEach((el,indexx)=>{
          indexx<=2? el.style.display= "block": el.style.display= "none"
     })
  }else if (e == temparr.length-1 ){   // nếu index đến giới hạn lớn nhất thì ẩn tất các button trừ 3 nút cuối gần cuối cùng
      document.querySelectorAll(".check button").forEach((el,indexx)=>{
          indexx<=temparr.length-4? el.style.display= "none": el.style.display= "block"
      })
  }else {     // các trường hợp còn lại của active button thì nó chỉ hiện nút button có index nhỏ hơn 1 đơn vị và button lớn hơn 1 đơn vị 
      document.querySelectorAll(".check button").forEach((el,indexx)=>{
          (indexx+2 > e && indexx-2 < e)? el.style.display= "block" : el.style.display= "none"
      })
  }
}