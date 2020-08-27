import React from 'react';

const aux = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
      );
}
 
export default aux;