import Card from '../Card/Card';
import { CardsContainer } from './styledComponents';
export default function Cards({characters}) {
   return <CardsContainer> 
{
characters.map(({id, name , status, species, gender,
   origin, image,}) => {
return(
   <Card
   key={id}
   id={id}
   name={name}
   status={status}
   species={species}
   gender={gender}
   image={image}
   origin={origin.name}
   onClose={() => window.alert('Emulamos que se cierra la card')}/>
)
})
 }
   </CardsContainer>;
}
