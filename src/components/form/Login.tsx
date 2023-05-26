import React, { useState } from "react"
interface IState {
    user : {
        name : string
        email : string
        contactno : string
    }
};


type FormProps = {
    text:string,
    onSubmit: (user:{
        email:string
        name:string
        contactno:string
      }) => void,
    disable : boolean
}
const Login = (props : FormProps) => {
    const [state, setState] = useState<IState>({
        user: {
            name: '',
            email: '',
            contactno: ''
        }
    });

    // handle chnage function
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) : void => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value
            }
        });
    };

    // form handling
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) : void => {
        console.log("Inside handleSubmit");
        console.log(state);
        event.preventDefault();
        props.onSubmit({
            email:state.user.email,
            name:state.user.name,
            contactno:state.user.contactno
          });
        console.log("user info created");
        console.log(state);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <h2>{props.text}</h2>
                    <label>UserName : </label>
                    <input id='name' type="text" name="name" disabled={props.disable} value={state.user.name} onChange={handleChange}/>
                    <label> Email : </label>
                    <input id='email' type="text" name="email" disabled={props.disable} value={state.user.email} onChange={handleChange}/>
                    <label> Contact No : </label>
                    <input id='contactno' type='text' name="contactno" disabled={props.disable} value={state.user.contactno} onChange={handleChange} />
                    <button type="submit" disabled={props.disable}>Submit</button>
            </form>
        </div>
    )
}

export {
    Login
}
