import React from "react";

const EmployeeDetails = ({temp}) =>{
    return(
        <>
            <p>Nazwisko: {temp.surname}</p>
            <p>Imię: {temp.name}</p>
            <p>Wiek: {temp.age}</p>
            <p>Stanowisko: {temp.position}</p>
        </>
    );
};


export default EmployeeDetails;