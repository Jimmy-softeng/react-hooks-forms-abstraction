import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({firstName:"John",
    lastName:"Henry",
    admin:false,
  });
  

 
  function handleChange(event){
    const name=event.target.name;
    let value=event.target.value;
    setFormData({...formData,[name]:value,})
  
    // use `checked` property of checkboxes instead of `value`
    if(event.target.type==="checkbox"){
      value=event.target.checked
    }
  }
   function handleSubmit(event){
    event.preventDefault();
     console.log(formData);
   }
  return (
    <form>
      <input type="text" name="firstName"onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName"onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      <button type="submit"onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
