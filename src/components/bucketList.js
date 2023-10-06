import {useState} from 'react'

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];

  export default function BucketList (){

    const [list , setList] = useState(initialList)

    function handleToggle(id,next){
        setList(list.map((item)=>
            {
                if(item.id === id){
                    return {...item,seen:next}
                }else{
                    return item
                }
            }
        ))
    }

    return(
        <>
              <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>

      <ItemList
        alist={list}
        onToggle = {handleToggle}
      />
        </>
    )

  }

  function ItemList ({alist,onToggle}){

    return(
        <>
            <ul>
                {
                    alist.map(aitem =>(
                        <li key={aitem.id}>
                            <label>
                                <input
                                    type='checkbox'
                                    checked={aitem.seen}
                                    onChange={
                                        e =>{
                                            onToggle(
                                                aitem.id,
                                                e.target.checked
                                            )
                                        }
                                    }
                                />
                                {aitem.title}
                            </label>
                        </li>
                    ))
                }
            </ul>
        </>
    )

  }