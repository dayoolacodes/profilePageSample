import React from 'react';
import Aux from '../../hoc/Auxil'
import './Header.css'





const header = () => {
    const indexStyle={
        border: "2px solid", 
        borderRadius:"50%", 
        padding:"20px", 
        color: "white",
        fontWeight: "bold",
        fontSize: "15px",
        margin: "0px",
        cursor: "pointer",
        backgroundColor: "grey",
    }
    
    return ( 
        <Aux className='header'>
            {/* <img src="" alt="logo" style={{float: "left"}}/> */}
            <h3 style={{float: "left"}} >Logo</h3>
            <span className='nameIndex'> 
                {/* I handcoded the letter, You should get this from your users username */} 
                <div style={indexStyle}> M </div> 
            </span>
        </Aux>
     );
}
 
export default header;