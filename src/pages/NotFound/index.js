import { useParams, useNavigate } from "react-router-dom"

const NotFound = ()=>{
    const params= useParams()
    const navigate = useNavigate()
    return <div>
        NotFound
        页面不存在
    </div>
}

export default NotFound