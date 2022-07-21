import React from "react";
import PropTypes from "prop-types";


const Name = ({mess, name,title, status }) => {
     const state = {
        demo: title,
        demo2: name,
        demo3: status,
        demo4: mess,
    }
    const {demo,demo2,demo3,demo4} = state;
    return (
        <div className="taskItem">
           <label> Title{demo}</label>
           <label> Creator{demo2}</label>
           <label> Status{demo3}</label>
           <p>
            Desscription: <br/>{demo4}
           </p>
      </div>
    );
};




export default Name;
