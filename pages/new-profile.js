import Layout from "../component/layout";

import { useState } from "react";
export default function Profilena(props){
    const [Profile,setProfile] = useState({
        type:'',
        firstname:'',
        middlename:'',
        lastname:'',
        email:'',
        password:'',
        age:0,
        birthdate: '',
        isgay:''
    })
    const [Sub,setSub] = useState('')
    const [resa,setRes] = useState([])

    const sendProfile = (event) => {
        setSub('submit')
        console.log('????')
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        const a = parseInt(Profile.age)

        //set data format
        setProfile(prev=>({...prev,['type']:'send'}))
        setProfile(prev=>({...prev,['age']:a}))
        
        
 
        const  _sendProfile = async ()=>{
        const response = await fetch('/api/new-profile',{
            method: 'POST',
            body: JSON.stringify(Profile)
        })}
        //call itself after let setState update
        _sendProfile();
        // const JSONdata = JSON.stringify(Profile)
    
        // // API endpoint where we send form data.
        // const endpoint = '/api/new-profile'
        // // Form the request for sending data to the server.
        // const options = {
        //   // The method is POST because we are sending data.
        //   method: 'POST',
        //   // Tell the server we're sending JSON.
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   // Body of the request is the JSON data we created above.
        //   body: JSONdata
        }

    const sendUpdate = async()=>{
        setSub('update')
        const response = await fetch('/api/profile-update',{
            method: 'GET'
        })
        console.log(response)
        console.log('sssssssss')
        //accept JSON data 
        const responseData = await response.json();
        const responeArray = responseData.body //important info!!!

        console.log(responeArray)
        console.log(responeArray[2].firstname)

        setRes(responeArray)

    }

    const Rowtable=()=>{
        let listrow =()=> {}
        if(resa===[]){}
        else{
        listrow = resa.map((sa)=>
        <tr className="table-success">
                
        <th scope="row">{sa.id}</th>
        <td>{sa.firstname}</td>
        <td>{sa.middlename}</td>
        <td>{sa.lastname}</td>
        <td>{sa.email}</td>
        <td>{sa.password}</td>
        <td>{sa.age}</td>
        <td>{sa.birthdate}</td>
        <td>{String(sa.isgay)}</td>
    </tr>
      )}
        return(
        listrow
      )
    }

    const Bigtable=()=>{

        return(
        <table className="table">
        <thead>
            <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
            <th scope="col">Middlename</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Age</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Isgay</th>
            </tr>
        </thead>
        <tbody>
           <Rowtable/>
        </tbody>
        </table>)
    }
    

    const changeProfile=(e)=>{
        
       if(e.target.name === 'isgay'){
        console.log(Profile.isgay)
        setProfile(prev =>(
            {...prev, ['isgay']:e.target.checked}))
       }
       else{
        setProfile(prev =>(
            {...prev, [e.target.name]:e.target.value}))
       }

        }
    
    const Newone=()=>{
        if(Sub === 'submit'){
        return <p> Submitted!</p>}
        else if(Sub === 'update'){
            return <p> Updated!</p>
        }
        else{
            return <></>
        }
        }
    
    return(
        <>
        <Layout/>
        <div className="container">
        <form className="form-horizontal" onSubmit={sendProfile} method="post">
            <div className='row mb-3'>
                <div className="col ">
                    <label className="form-label">First Name:</label>
                      
                        <input type='text' onChange={changeProfile} name='firstname' class='form-control' 
                        placeholder='John' required/>
                  
                </div>
                <div className="col" >
                    <label className="form-label" >Middle Name:</label>
                    <input type='text' name='middlename' onChange={changeProfile} class='form-control' 
                    placeholder='Von' />
                </div>
                <div className="col">
                    <label className="form-label">Last Name:</label>
                    <input type='text' name='lastname' onChange={changeProfile} class='form-control' 
                    placeholder='Bobby' />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label className="form-label">Email:</label>
                           
                        <input type='email' name='email' onChange={changeProfile} class='form-control' 
                        placeholder='someone@gmail.com' required/>
                    
                </div>
                <div className="col">
                    <label className="form-label">Password:</label>
                    <input type='password' name='password' onChange={changeProfile}class='form-control' 
                    required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label className="form-label">Age:</label>
                        <input type='number' onChange={changeProfile} name='age' class='form-control' 
                        placeholder='2' required/>
                </div>
                <div className="col">
                    <label className="form-label">Birthdate:</label>
                        <input type='date' name='birthdate'onChange={changeProfile} class='form-control' 
                         />
                </div>
            </div>
            <div className='row mb-3'>
                <div className="col ms-2 form-check">
                    <label className="form-label">isgay</label>
                    <input type='checkbox' name='isgay' onChange={changeProfile} class='form-check-input'/> 
                </div>
                <div className="col">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <div className="col">
                
                </div>
            </div>
            </form>
            <div className ='row mb-4'>
                <div className="col">
                    <button type="update" onClick={sendUpdate} class="btn btn-secondary">Update</button>
                </div>
                <div className="col">
                    {Newone()} 
                </div>
            </div>
            <Bigtable/>

          
          

        </div>
        </>
    )
}