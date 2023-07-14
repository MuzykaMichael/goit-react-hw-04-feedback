import { Component } from "react";
import { ListOptions } from "./FeedbackOptions.styled";
import propTypes from 'prop-types'
import { ListOptionItem } from "components/ListOptionItem/ListOptionItem";

export class FeedbackOptions extends Component {
    render(){ 
    const {options,handleClick} = this.props;
    return(
    <ListOptions>
        {options.map(option=>(
            <ListOptionItem
            key={option}
            option={option}
            handleClick={handleClick}
            />
        ))}
    </ListOptions>
    )}
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    handleClick: propTypes.func.isRequired,
}