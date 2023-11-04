import React,{useState} from "react";
import {Container,Form,Button} from "react-bootstrap";
import '../styles/Login.css';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import API_URL from "../../config/global";


const Login = ()=>
{

    const [FormData,SetFormData] = useState({
            
        email : "",
        password : ""
    });

    const handleChange = (e)=>{
        const{name,value} = e.target;
        SetFormData({...FormData,[name]:value});

    };

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response = await axios.post(`${API_URL}login`,FormData);
        console.log(response);

        if(response.data == "Invalid User Name or Password")
        {
            alert("Invalid Password");
        }
        else if(response.data == "Server Busy")
        {
            alert("Check your email");
        }
        else if(response?.status)
        {
            localStorage.setItem("UserInfo",JSON.stringify(response.data));
            navigate("/Home");
        }

        //console.log(FormData);
    };

    const navigate = useNavigate();

    return(

        <Container>
        <h1> Login Form </h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" name="email" value={FormData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.Label> Password </Form.Label>
                <Form.Control type="password" name="password" value={FormData.password} onChange={handleChange} required />
            </Form.Group>
        
        <Button type="submit" variant="primary"> Login </Button>
        </Form>
        <p>Wanna Register with another Account ?</p><Link to="/">Register</Link>
    </Container>
    );
};

export default Login;