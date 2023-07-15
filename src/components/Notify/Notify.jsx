import { NotifyP } from "./Notify.styled";
import propTypes from 'prop-types'

export const Notify = ({notification}) =>{
        return <NotifyP>{notification}</NotifyP>
}

Notify.propTypes = {
    notification: propTypes.string.isRequired,
}