import { ListOptions } from "./FeedbackOptions.styled";
import propTypes from 'prop-types'
import { ListOptionItem } from "components/ListOptionItem/ListOptionItem";

export const FeedbackOptions = ({options,handleClick}) => {

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
    )
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    handleClick: propTypes.func.isRequired,
}