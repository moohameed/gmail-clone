import { Checkbox, IconButton } from '@material-ui/core'
import  LabelImportantOutlinedIcon  from '@material-ui/icons/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import React from 'react'
import './EmailRow.css'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { selectMail } from './features/mailSlice'


function EmailRow({ id ,tittle , subject ,description , time}) {

    const navigate  = useNavigate() ;
    const dispatch = useDispatch() ;

    const openMail = () => {
        dispatch(selectMail({
            id ,
            tittle ,
            subject ,
            description ,
            time 
        })) ;
        navigate ('/mail')
    }

    return (
        <div className='email__row' onClick={openMail }>
          <div className="emailRow__options">
          <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
          </div>

          <div className="emailRow__tittle">
                <h3>{tittle}</h3>
          </div>

          <div className="emailRow__message">
                <h4>{subject} {" - "}
                <span className="emailRow__description">
                    {description}
                </span>
                </h4>
          </div>

          <div className="emailRow__time">
                {time}
          </div>


        </div>
    )
}

export default EmailRow
