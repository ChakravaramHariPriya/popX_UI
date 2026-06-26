import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/landing.css";

function Landing() {

const navigate = useNavigate();

return (

<motion.div

className="landing"

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:.6}}

>

<div className="landing-bottom">

<h1>

Welcome to PopX

</h1>

<p>
  Join PopX to connect with people,
  <br />
  build your profile, and explore new opportunities.
</p>

<Button

text="Create Account"

background="linear-gradient(135deg,#3dbca8,#5fbf7d,#8ccf57)"

color="#110202"

onClick={()=>navigate("/signup")}

/>

<div style={{height:"14px"}}/>

<Button

text="Already Registered? Login"

background="linear-gradient(135deg,#3dbca8,#5fbf7d,#8ccf57)"
color="#0c1503"

onClick={()=>navigate("/login")}

/>

</div>

</motion.div>

)

}

export default Landing;