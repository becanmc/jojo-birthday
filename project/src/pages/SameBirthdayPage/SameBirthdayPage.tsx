import styles from "./SameBirthdayPage.module.css";
import peopleData from "../../../data/sharingBirthday.json"
import Title from "../../components/atoms/Text/Title/Title";
import Subtitle from "../../components/atoms/Text/Subtitle/Subtitle";
import PeopleCard from "../../components/molecules/Cards/PeopleCard/PeopleCard";

type People = {
    name: string,
    image: string
}

const people = peopleData as People[];

function SameBirthdayPage(){
    return (
        <section className={styles.content}>
            <Title>Pessoas que compartilham o anivesrário com você</Title>
            
            <div className={styles.card_content}>
                <Subtitle> Clique para revelar </Subtitle>
                <div className={styles.cards}>
                    {
                    
                    people.map(person =>
                        <>
                            <PeopleCard img={person.image}> 
                                {person.name} 
                            </PeopleCard>
                        </>
                    )
                }
                </div>
            </div>
        </section>
    );
}

export default SameBirthdayPage;