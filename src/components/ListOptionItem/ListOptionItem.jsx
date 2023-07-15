import propTypes from 'prop-types'
import { ListOptionsButton } from "components/FeedbackOptions/FeedbackOptions.styled";

export const ListOptionItem = ({option,handleClick}) =>{

        return(
            <li>
                <ListOptionsButton type='button' onClick={handleClick} name={option}>
                    {option}
                </ListOptionsButton>
            </li>
        )
    
}

ListOptionItem.propTypes = {
    option: propTypes.string.isRequired,
    handleClick: propTypes.func.isRequired,
}