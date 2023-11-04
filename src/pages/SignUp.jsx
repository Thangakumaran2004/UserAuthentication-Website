import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap";
import '../styles/SignUp.css';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import API_URL from "../../config/global";




const SignUp = ()=>{

    const [FormData,SetFormData] = useState({
        name : "",
        email : "",
        password : ""
    });

    const handleChange = (e)=>{
        const{name,value} = e.target;
        SetFormData({...FormData,[name]: value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const response = await axios.post(`${API_URL}signin/verify`,FormData);

            console.log(response);

            if(response.data == true)
            {
                alert("Registration link sent to your email");
            }
            else
            {
                alert("User Already exists");
            }
        }catch(e){
            console.log("error during registration",e)
        }
       // console.log(FormData);
    }

    const navigate = useNavigate();

    return(
        <Container>
            <h1>Registration Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label> Name </Form.Label>
                    <Form.Control type="text" name="name" value={FormData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="email" name="email" value={FormData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Password </Form.Label>
                    <Form.Control type="password" name="password" value={FormData.password} onChange={handleChange} required />
                </Form.Group>
            
            <Button type="submit" variant="primary"> Register </Button>
            </Form>
            <p> Already have an account ? <Link to="/login">Login</Link> </p>
        </Container>
    );
};

export default SignUp