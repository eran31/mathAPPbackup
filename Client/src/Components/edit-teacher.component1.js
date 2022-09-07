// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherForm from "./TeacherForm";
import { useParams } from "react-router-dom";

// EditStudent Component
const EditStudent = (props) => {
	const { id } = useParams()
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	phone:"",
	password:"",
    rollno: ""
	
});

//eran change
//onSubmit handler
const onSubmit = (teacherObject) => {
	axios
	.put(
		"http://localhost:4000/teachers/update-teacher/" +
		//props.match.params.id,
		id,
		teacherObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Teacher successfully updated");
		//props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

//eran change
// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/teachers/update-teacher/"
		//+ props.match.params.id
       // + props.params.id
		+id
	)
	.then((res) => {
		const { name, email, password, phone, rollno } = res.data;
		setFormValues({ name, email, password, phone, rollno });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<TeacherForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Teacher
	</TeacherForm>
);
};

// Export EditStudent Component
export default EditStudent;
