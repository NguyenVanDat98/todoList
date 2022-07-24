import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Testa(props) {
  const { tit, name, mess } = props;
  const [status, setTus] = useState("Start");
  const [colorr, setcolor] = useState(' #04BE00');
  const [text, settext] = useState("New"); 
  
  function settxt() { 
    
     if ( status === "Start") {
      setTus('Done');
      setcolor('#F88F14');
      settext('Doing');
      props.tt = text
      console.log( text);
    
    } else if ( status === "Done") {
      setTus('Renew');
      setcolor('#675BF1');
      settext('Done') ;
      props.tt = text
      console.log( text);
    
    }else {
      setTus('Start');
      setcolor('#04BE00');
      settext('New')  
      props.tt = text     
      console.log( text);

    }  
    console.log(props.tt);
  }
  return (
    
    <div className="taskItem mx-2 my-2 px-2 py-2">
      <label> Title : <a> {tit}</a> </label><br></br>
      <label> Creator : <a>{name} </a></label><br></br>
    <label> <a style={{color :colorr}} >Status:{ text } </a></label><br></br>
     <div> Desscription: 
     <p>{mess}</p></div>
      <button type='button' className='btn-primary' onClick={settxt} >{status}</button>
    </div>
    
  )
};
Testa.propTypes = {

}
Testa.defaultProps = {
  tit: "title 1",
  name: "name",
  status: "status 1",
  mess: "messs",
}



export default Testa;