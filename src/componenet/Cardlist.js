import React from 'react';
import Card from './Card';


const Cardlist = ({Robot}) =>{
    
    return(
        <div>
        {
            Robot.map((user,i) => {
                return(
                      <Card
                      key={i}
                      id={Robot[i].id}
                      name={Robot[i].name}
                      email={Robot[i].email}
                      />
                );
            }
            )
        }
        </div>

    );
}
export default Cardlist;