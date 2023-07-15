import { StatisticsList } from "./Statistics.styled";
import propTypes from 'prop-types'

export const Statistics = ({good,neutral,bad,all,percentage}) => {

        return(
            <StatisticsList>
                <li>
                    <p>Good:{good}</p>
                </li>
                <li>
                    <p>Neutral:{neutral}</p>
                </li>
                <li>
                    <p>Bad:{bad}</p>
                </li>
                <li>
                    <p>Total feedback:{all}</p>
                </li>
                <li>
                    <p>Positive percentage:{percentage}%</p>
                </li>
            </StatisticsList>
        )
}

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    all: propTypes.number.isRequired,
    percentage: propTypes.number.isRequired,
}