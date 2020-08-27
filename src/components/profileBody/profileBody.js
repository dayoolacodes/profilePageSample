import React from 'react';
import Aux from '../../hoc/Auxil'
import './profileBody.css'

const profileBody = (props) => {
    return ( 
        <Aux className='profileBody'>
            {/* You should get these details from your users */} 
            <img  src="/" alt="profilepic" />
            <h3>Profile Pic</h3>
            <div style={{fontWeight:"bold"}}>Momah Richard Somto</div><br />
            <div>momahsomto<wbr />@bigboy.com</div>
        </Aux>
     );
}
 
export default profileBody;