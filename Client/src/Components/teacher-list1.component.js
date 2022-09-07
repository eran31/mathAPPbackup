import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TeacherTableRow from "./TeacherTableRow";

const TeacherList = () => {
const [teachers, setTeachers] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/teachers/")
	.then(({ data }) => {
		setTeachers(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return teachers.map((res, i) => {
	return <TeacherTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>full Name</th>
			<th>Email</th>
			<th>phone</th>
			<th>password</th>
			
			<th>roll no</th>
			
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default TeacherList;
