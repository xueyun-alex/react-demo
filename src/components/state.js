import {sculptureList} from './data'
import { useState } from 'react'

export default function Gallery (){
    const [index,setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const hasNext = index< sculptureList.length -1

    function handleNextClick(){
        if(hasNext){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }

    function handleMoreClick (){
        setShowMore(!showMore)
    }

    let scultpture = sculptureList[index]

    return(
        <>
        <button onClick={handleNextClick}>
            Next
        </button>
        <h2>
            <i>{scultpture.name}</i>
            by {scultpture.artist}
        </h2>

        <h3>
            ({index + 1} of {sculptureList.length})
        </h3>

        <button onClick={handleMoreClick}>
            {showMore?'hide':'show'} details
        </button>

        {showMore && <p>{scultpture.description}</p>}
        </>
    )

}