import { useState } from "react";
import Layout from "../component/layout";
import cn from 'classnames';

export default function NewMeeting(){
    const [isCheck,setisCheck] = useState(false)
    
    const onChangeCheckBox =(e)=>{     
     
      setisCheck(e.target.checked)
      if(!isCheck){
        
}

      
    }

    const NewPay =()=>{
        return( //the best way to use if else state ment on element
            <div className={"mb-3" +(isCheck ? '' : ' donsee')} >
                <label for="exampleInputPassword1" class="form-label">Cost</label>
                <input type="number" class="form-control" placeholder="99"/>
            </div>
            )
    }


    return(
        <>
        <Layout/>
        <div className='container' >
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Meeting Title</label>
          <input type="text" class="form-control" placeholder="Eat and Go" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Location</label>
          <input type="text" class="form-control" placeholder="Siam"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Description</label>
          <input type="text" class="form-control" placeholder="I love this meeting"/>
        </div>
        <div class="mb-3 form-check">
            <input onChange={e=>onChangeCheckBox(e)} type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Paid Meeting</label>
        </div>
        <NewPay/> 
    
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      </>
    )
}