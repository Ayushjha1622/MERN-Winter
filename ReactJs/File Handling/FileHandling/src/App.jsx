
import { Form, useForm } from 'react-hook-form'
import './App.css'
import ( useForm)

function App() {
 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },

  } = useForm()

  async function onSubmit(data) {
    //API call ko simulate krte h
    await new Promise((resolve) => setTimeout(resolve,5000))
    console.log("submitting the form",data);
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name: </label>
        <input 
        className={errors.firstName ? 'input-error' : ""}
         {...register('firstName',{
          required: true, 
          minLength:{value:3, message:'Min Len atleast 3'}, 
          maxLength: {value:6, message:'max Length atmost 6'}})}/>
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="">Middle Name: </label>
        <input className={errors.firstName ? 'input-error' : ""}
        {...register('MiddleName')} />
        
      </div>
      <br />
      <div>
        <label htmlFor="">Last Name: </label>
        <input className={errors.firstName ? 'input-error' : ""}
        {...register('lastName',{
          pattern: {
            value: /^A-Za-z]+$/i,
            message:"Last Name is not as per the rules"
          }
        })}/>
        {errors.lastName && <p className='error-msg'>{errors.lastName.message} </p>}
      
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/>
    </form>
  )
}

export default App
