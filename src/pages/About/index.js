import { useParams, useNavigate } from "react-router-dom"

const About = ()=>{
    const params= useParams()
    const navigate = useNavigate()
    return <div>
        About
        <button onClick={()=>{
            navigate('/')
        }}>Layout</button>
    </div>
}

export default About