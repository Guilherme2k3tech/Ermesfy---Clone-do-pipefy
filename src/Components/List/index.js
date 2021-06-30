import React from 'react'
import {Container} from "./styles"
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import {useDrag} from "react-dnd"



export default function List({data, index: listIndex}) {
    return (
       <Container done={data.done} >
           <header>
               <h2>
                   {data.title}
               </h2>
               {data.creatable && (
               <button><MdAdd size={24} color='FFF'  /></button>
               )}
           </header>

           <ul>
          {data.cards.map((card, index)=> <Card key={card.id} index={index }data={card} listIndex={index}/>)}
       </ul>
       </Container>

       
    )
}
