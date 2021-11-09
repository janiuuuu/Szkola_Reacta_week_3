import React from "react";


const EmployeeItem = ({item, isClicked}) => {
    return(
        <div>
            <p onClick={() => isClicked(item.id)}>{ item.surname } { item.name }</p>
        </div>
    );
};
export default EmployeeItem;