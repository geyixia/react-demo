import { Link, useNavigate } from "react-router-dom"

const Login = ()=>{
   const navigate = useNavigate()
    return <div>
        登录页
        <Link to="/">首页</Link>
        <button onClick={()=>{
            navigate('/article/1001/你好')
        }}>去文章页</button>
    </div>
}

export default Login