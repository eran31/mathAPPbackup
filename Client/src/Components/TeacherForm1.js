import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import TextareaAutosize from 'react-textarea-autosize';

const TeacherForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	rollno: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Required"),
	phone:Yup.string()
	.required("Required"), 
	password:Yup.string()
	.required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}
	 initialValues={{
        checked: [],
      }}
	>
		<Form>
		<FormGroup>
            <label>full name:</label>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
        <label>e-mail:</label>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
        <label>phone number:</label>
			<Field name="phone" type="text"
				className="form-control" />
			<ErrorMessage
			name="phone"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
        <label>passWord:</label>
			<Field  name="password" type="text"
				className="form-control" />
			<ErrorMessage
			name="password"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<FormGroup>
        <label>roll no:</label>
			<Field name="rollno" type="number"
				className="form-control" />
			<ErrorMessage
			name="rollno"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
	  	
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default TeacherForm;
