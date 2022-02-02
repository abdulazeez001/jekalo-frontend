import Form from './components/form';
import './App.css';
import User from './components/users';
import {useAxiosHelper,BASE_URL} from './util/axiosHelper';


function App() {

let fetchData = useAxiosHelper(BASE_URL).useGet()

let list = []
  if(fetchData.data){  
   list = fetchData.data.map((user)=>{
     return <User key={user.username}
                  name_prefix={user.name_prefix} 
                  username={user.username} 
                  fullname={`${user.first_name} ${user.last_name}`}
                  dob={user.date_of_birth}
                />
  })}

  return (
    <div className="App">
      <Form/>
      <section>
         <p className='user-title'>Users</p>
         <div>
            {list.length === 0 ? (<p style={{textAlign:"center"}}>No user on this list yet :(</p>):list}
         </div>
      </section>
    </div>
  );
}

export default App;
