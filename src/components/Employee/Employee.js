
import dataEmployees from "./data";
import dataEmployee from "./data"
import EmployeeItem from "./EmployeeItem";
import React, { useState }  from "react";
import EmployeeDetails from "./EmployeeDetails";

const Employee = () => {
    const style = {
        margin: 10,
        display: 'flex'
    }

    const style2 = {
        marginLeft: 10,
        marginRight: 10
    }

    const [temp, setTemp] = useState(0);

    const clickedEmployee = (id) => {
        setTemp(dataEmployees[id]);
      };

    const nameSurname = dataEmployee.map((employee,index) =>(
            <EmployeeItem key={employee.id} item={ employee } isClicked={ clickedEmployee }/>
        ));

    return(
        <div id={temp.id} style={style}>
           <div style={style2}>{ nameSurname } </div>
           <div style={style2}><EmployeeDetails key={ temp.id } temp={ temp }/></div>
        </div>
    );
}

export default Employee;