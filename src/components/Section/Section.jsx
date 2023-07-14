import { Component } from "react";
import Title from './Section.styled'
import propTypes from 'prop-types'

export class Section extends Component {

    render(){    
    const {title, children} = this.props;
    return(
        <>
        <Title>{title}</Title>
        {children}
        </>
    )}
};

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node,
}