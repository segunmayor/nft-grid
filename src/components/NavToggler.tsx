import {MouseEventHandler, FC, useState, ChangeEvent} from 'react'

interface Props {
    navTogglerClass?: string | null
    navTogglerStyle?: object
    buttonInlineStyle?: object
    buttonAction: (event: any) => boolean
}

const NavToggler: FC<Props> = ({...props}) =>
{

    return (
        <div className={`${props.navTogglerClass} nav-toggler`} style={props.navTogglerStyle}>
          <button style={props.buttonInlineStyle} type='button' onClick={ props.buttonAction }>
          <div>
          <span></span>
            <span></span>
            <span></span>
          </div>
          </button>
        </div>
    )
    
}

export default NavToggler