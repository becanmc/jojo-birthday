import styles from './PeopleCard.module.css';
import { useState } from "react";

type PeopleCardProps = {
    img: string,
    children: React.ReactNode
}

function PeopleCard({img, children} : PeopleCardProps){

    const [isCliked, click] = useState(false);

    function handleClick(){
        click(!isCliked)
    }

    return (
        <div className={styles.card} onClick={handleClick}>
            { isCliked? (
                <>
                    <img className={styles.image} src={img} alt={`${children} image`}  />

                    <span className={styles.name}> {children} </span>
                </>
                ) : 
                <></>
            }
        </div>
    );
}

export default PeopleCard;