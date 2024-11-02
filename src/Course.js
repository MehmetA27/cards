import React from 'react';

function Course(props) {
  console.log(props);
  return <div> {props.title} </div>;
}

export default Course;