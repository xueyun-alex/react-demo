import {getPerson} from './utils'
import {people} from './data'

const person ={
    name:'aaa',
    theme:{
        backgroundColor:'black',
        color:'pink'
    }
}

export default function HelloWord(){
    return(
        <>
        <div style={person.theme}>
        <h1>{person.name}=======HelloWord</h1>
        </div>

        <Card>
            <Avatar
            id={100}
            height={180}
            />
        </Card>

        <section>
            <h1>packing list</h1>
            <ul>
                <Item
                isPacked={true}
                name='t suit'
                />
                    <Item
                isPacked={false}
                name='ball'
                />
                    <Item
                isPacked={true}
                name='phone'
                />
            </ul>
        </section>

        <List/>
        </>
    )
}

function Avatar ({id,height}){
    return(
        <>
        <p>id======{id}</p>
        <p>height====={height}</p>
        <p>person=========={getPerson(18,'aaa')}</p>
        </>
    )
}

function Card ({children}){
    return (
        <div>
            {children}
        </div>
    )
}

function Item ({name,isPacked}){
    return(
        <>
         <li>
            {name} {isPacked && 'v'}
         </li>
        </>
    )
}

function List (){
    const listItems = people.map(person=>
        <li key={person.id}>
            <p>
                <b>{person.name}:</b>
                {''+person.profession+''}
                known for {person.accomplishment}
            </p>

        </li>
        )

console.log(people);
console.log(listItems);

    return(
        <>
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
            {/* <p>{people}</p> */}
        </article>
        </>
    )

}