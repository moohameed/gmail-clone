import React from 'react'
import './SidebarOption.css'
function SidebarOption({Icon,tittle,number,selected}) {
    return (
        <div className ={`sidebarOption ${selected && 'sidebarOption--active'}`}>
            <Icon />
            <h3>{tittle}</h3>
            <p>{number}</p>
        </div>

    )
}

export default SidebarOption
