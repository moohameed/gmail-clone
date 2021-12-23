import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import './SendMail.css'
import { Button } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { db } from './firebase'
import firebase from "firebase/compat/app"

function SendMail() {
    const {register , handleSubmit , watch ,formState: { errors }} = useForm() ;
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(data);
        db.collection("emails").add({
            to : data.to,
            subject : data.subject,
            message : data.message,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        }) ;
        dispatch(closeSendMessage()) ;
    };
    return (
        <div className='sendMail'>
            <div className="sednMail__header">
                <h3>New message </h3>
                <CloseIcon onClick={ ()=> dispatch(closeSendMessage())} className="sendMail__close"  />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input   name = "to" placeholder='To' type="email" {...register ('to',{required : true})} />
                {errors.to && <p className='sendMail__error'> To is required</p>}
                <input name='subject'   placeholder='Subject' type="text" {...register ('subject',{required : true})}/>
                {errors.subject && <p className='sendMail__error'> subject is required</p>}
                <input name='message'  placeholder='Messsage' type="text" className='sendMail__message' {...register ('message',{required : true})} />
                {errors.message && <p className='sendMail__error'> message  is required</p>}

                <div className="sendMail__options">
                    <Button className='sendMail__send'
                    variant='contained'
                    color ='primary'
                    type='submit'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
