import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Testa = (props) => {
  const { tit, name, mess } = props;
  const [status , setTus] = useState("Status : Start");
  const [tusDone , Done] = useState("start");
  return (
    <div className="taskItem mx-2 my-2 px-2 py-2">
      <label> Title : <a> {tit}</a> </label><br></br>
      <label> Creator : <a>{name} </a></label><br></br>
      <label> <a className={tusDone}>{status} </a></label><br></br>
      <p>
        Desscription: {mess} <br />
      </p>
      <button onClick={()=>{setTus("Status : Done"); Done("done")}}>Done</button>
      <button onClick={()=>{setTus("Status : Doning");Done("doning")}}>Doning</button>
    </div>

  )
};
Testa.propTypes = {

}
Testa.defaultProps = {
  tit : "title 1",
  name : "name",
  status : "status 1",
  mess : "messs",
}



export default Testa;