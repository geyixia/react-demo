import { useParams, useNavigate } from "react-router-dom"

const Article = ()=>{
    const params= useParams()
    const navigate = useNavigate()
    return <div>
        文章页
        <div onClick={()=>{
            navigate('/?id=13')
        }}>首页</div>
        <div>{params.name}</div>
    </div>
}

export default Article