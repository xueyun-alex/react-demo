import {useState} from 'react'

export default function Form (){

    const [person ,setPerson] = useState ({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
        }
    })

    function handleNameChange (e){
        setPerson({
            ...person,
            name:e.target.value
        })
    }

    function handleTitleChange (e) {
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                title:e.target.value
            }
        })
    }

    function handleCityChange (e) {
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                city:e.target.value
            }
        })
    }

    return(
        <>
            <label>
                name:<input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>

            <label>
                title:<input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>

            <label>
                city:<input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>

               <h1>name:{person.name}</h1>
               <div>==========</div>
               <p>title:{person.artwork.title}</p>
               <div>==========</div>
               <p>title:{person.artwork.city}</p>

        </>
    )

}