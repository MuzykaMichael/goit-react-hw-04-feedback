import { Component } from "react";
import propTypes from 'prop-types'
import { ListOptionsButton } from "components/FeedbackOptions/FeedbackOptions.styled";

export class ListOptionItem extends Component{
    render(){
        const {option,handleClick} = this.props;
        return(
            <li>
                <ListOptionsButton type='button' onClick={handleClick} name={option}>
                    {option}
                </ListOptionsButton>
            </li>
        )
    }
}

ListOptionItem.propTypes = {
    option: propTypes.string.isRequired,
    handleClick: propTypes.func.isRequired,
}