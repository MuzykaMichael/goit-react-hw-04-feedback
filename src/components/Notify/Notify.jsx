import { Component } from "react";
import { NotifyP } from "./Notify.styled";
import propTypes from 'prop-types'

export class Notify extends Component{
    render(){
        const {notification} = this.props;
        return <NotifyP>{notification}</NotifyP>
    }
}

Notify.propTypes = {
    notification: propTypes.string.isRequired,
}