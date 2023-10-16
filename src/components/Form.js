import React,{useState} from 'react';
const Form=()=>{
    
    const[user,SetUser]= useState({
        name:"",
        email:""
    })

    const [store,setStore] = useState([])

    const changeInput = (e) => {
        SetUser({
          ...user,
          [e.target.name]: e.target.value
        });
       
      }

    const submitData=(e)=>{
        e.preventDefault();
        console.log(user)
        setStore([...store,user])

    }

    return(

        <React.Fragment>
            <div className='container mt-4'>
                <div className='content'>
                    <form onSubmit={submitData}>
                        <input type="text" id='name' name='name' value={user.name} onChange={changeInput} placeholder="Enter your name"/>&nbsp;
                        <input type="text" id='email' name='email' value={user.email} onChange={changeInput}placeholder="Enter your email"/>
                        <br/><br/>
                        <button className='btn btn-sm btn-primary' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div>

                <ul>
                    {store.map((data, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {data.name}, <strong>Email:</strong> {data.email}
                    </li>
                    ))}
                </ul>
            </div>
              

        </React.Fragment>
    )

}
export default Form;
