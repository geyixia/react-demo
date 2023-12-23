import { useParams, useNavigate } from "react-router-dom"

const Layout = ()=>{
    const params= useParams()
    const navigate = useNavigate()
    return <div>
        layout
        <button onClick={()=>{
            navigate('/about')
        }}>About</button>
    </div>
}

export default Layout