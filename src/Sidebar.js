import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from './SidebarOption'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PhoneIcon from '@material-ui/icons/Phone'
import DuoIcon from '@material-ui/icons/Duo'
import PersonIcon from '@material-ui/icons/Person'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'
function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <Button
            startIcon = {<AddIcon fontSize='large' />}
            className='sidebar__compose'
            onClick={ ()=> dispatch(openSendMessage())}
            >

               compose 
            </Button>
            <SidebarOption Icon ={InboxIcon} tittle = "Inbox" number={54} selected={true}/>
            <SidebarOption Icon ={StarIcon} tittle = "Starred" number={54} />
            <SidebarOption Icon ={AccessTimeIcon} tittle = "Snoozed" number={54} />
            <SidebarOption Icon ={LabelImportantIcon} tittle = "Important" number={54} />
            <SidebarOption Icon ={NearMeIcon} tittle = "Sent" number={54} />
            <SidebarOption Icon ={NoteIcon} tittle = "Drafts" number={54} />
            <SidebarOption Icon ={ExpandMoreIcon} tittle = "More" number={54} />

            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>

                </div>
            </div>
   
        </div>
    )
}

export default Sidebar
