import Title from './Section.styled'
import propTypes from 'prop-types'

export const Section = ({title,children}) =>{


    return(
        <>
        <Title>{title}</Title>
        {children}
        </>
    )
};

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node,
}