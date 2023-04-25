import React, {FC} from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button: FC<Props> = ({...children}) => {
    return (
        <button {...children}></button>
    )
}

export default Button