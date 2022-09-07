import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TeacherTableRow = (props) => {
const { _id, name, email, phone, password , rollno} = props.obj;
//console.log("id" + _id);
const deleteTeacher = () => {
	axios
	.delete(
"http://localhost:4000/teachers/delete-teacher/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Teacher successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{phone}</td>
	<td>{password}</td>
	<td>{rollno}</td>
	
	
	<td>
		<Link className="edit-link"
		to={"/edit-teacher/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteTeacher}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default TeacherTableRow;
