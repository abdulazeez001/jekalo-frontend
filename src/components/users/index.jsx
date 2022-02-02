import StyleUser from "./usersStyle";
import deleteVector from "../../assets/images/Vector.png"
import { axiosTemplate,BASE_URL } from './../../util/axiosHelper';

const User = ({name_prefix,username,fullname,dob}) =>{

   async function deleteUser(e){
        e.preventDefault()
        await axiosTemplate(BASE_URL).delete({username:e.target.dataset.distinct})
        setTimeout(window.location.reload(),3000) 
    }
    return(
        <StyleUser>
            <div>
                <p className="name_prefix">{name_prefix}</p>
                <p className="username">{username}</p>
            </div>
            <div>
                <p className="fullname">{fullname}</p>
            </div>
            <div>
                <p className="dob">{dob}</p>
                <div className="del-btn">
                   <img src={deleteVector} alt="" data-distinct={username} onClick={(e)=>{deleteUser(e)}}/>
                </div>
            </div>
        </StyleUser>
    )}

export default User;