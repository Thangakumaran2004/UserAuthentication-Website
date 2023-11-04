import {React,useEffect,useState} from "react";
import { Container,Button } from "react-bootstrap";
import axios from "axios";
import API_URL from "../../config/global";

const Home = ()=>{

    const [res,setRes] = useState({});

   useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("UserInfo"));

        if(user && user.token)
        {
            getData(user.token);
        }
    },[])

    const getData = async (token)=>{
        try{
            const config = {
                headers :{
                    Authorization: token
                }
            }
            const response = await axios.get(`${API_URL}home`,config);
            console.log(response);
          //  console.log("hii");
            if(response.data == "Invalid Token")
            {
                alert("Login again");
            }
            else if(response.data =="Server Busy")
            {
                alert("Server Busy");
            }
            else if(response?.status)
            {
                setRes(response.data);
            }

        }catch(e){
            console.log(e);
        }
    };

    //const response = axios.get(`${API_URL}home`,config);

    return(
        <Container>
            <h1>
                Welcome to My WebWorld
            </h1>
            <p>{res.name} </p>
            <Button type="submit" variant="primary">Click here to explore</Button>
        </Container>
    );
};

export default Home;