import React from 'react'
import ICard from './ICard'
import  pic1 from '../images/pic1.png'

function ICardGallery(){
    return (
        <div  style= {{body:'flex' ,justifyContent:'space-evenly' ,border:'2'}}>
        <ICard pic={pic1} roll="3456" name="sonu" branch ="Cse" college="Abes Engineering COllege "/>
         <ICard roll="8808" name="Ankit kumar" branch="cse" />
         <ICard  roll="3645" name="reserve" branch ="Cse" college="Abes Engineering COllege "/>
        </div>
    )
}
export default ICardGallery 