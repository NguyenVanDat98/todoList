import React from "react";
import PropTypes from "prop-types";
import NextPage from "./NextPage";

const ListNext = (props) => {
  const { sttNum ,Arr} = props;

  const aaa=props.Loo;
  console.log(aaa);
  return <div>
  {
    aaa.map( arc=>{
     <a>{arc}</a>
  })
  }
  </div>
  

};

ListNext.propTypes = {};

export default ListNext;
