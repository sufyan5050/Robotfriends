import React from 'react';
import Card from './Card';


const Cardlist = ({Robot}) =>{
    return(
        <div>
        <Card id={Robot[0].id} name={Robot[0].name} email={Robot[0].email}/>
        <Card id={Robot[1].id} name={Robot[1].name} email={Robot[1].email}/>
        <Card id={Robot[2].id} name={Robot[2].name} email={Robot[2].email}/>
        <Card id={Robot[3].id} name={Robot[3].name} email={Robot[3].email}/>
        </div>

    );
}
export default Cardlist;