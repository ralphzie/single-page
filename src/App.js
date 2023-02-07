import { useState } from "react";


const App = () => {



  return(
      <div className="main">
           <div className="bg-image">

           </div>
           <div className="form bg-white">
            <form> 
              <h1>Register to Order!</h1>
            <div class="mb-3">
              <input type="email" class="form-control" id="fullname" placeholder="fullname"/>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="description" placeholder="description"/>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="location" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
            <select class="form-select" aria-label="Default select example">
                    <option selected>select country</option>
                    <option value="UK1">UK</option>
                    <option value="USA">USA</option>
                    <option value="SA">S.A</option>
            </select>
            </div>
            <div class="mb-3">
            <label for = "gender"> Gender: </label>

            <input className="mx-4" type= "radio" id="male"></input>
            <label for = "male"> Male </label>

            <input className="mx-4" type= "radio" id="female"></input>
            <label for = "female"> female </label>

            <input className="mx-4" type= "radio" id="other"></input>
            <label for = "other"> other </label> 

            </div>

           <div class="mb-3">
              <label for = "agree"> Agree: </label>
              <input className="mx-4" type= "checkbox" id="agree"></input>
            </div>

            <div class="mb-3">
              <button className="btn btn-md btn-success">submit</button>
            </div>
            </form>
           </div>
       </div>
  )
    
}

export default App;



