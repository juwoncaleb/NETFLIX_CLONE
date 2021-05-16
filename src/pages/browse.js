import React from 'react'
import { useContent } from "../hooks";
import selectionFilter from "../utility/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
    //fetches series from the firebase database
    const {series} = useContent('series')
    const {films} = useContent('films')
    const slides = selectionFilter({series , films})
    console.log(slides );
    
    return  <BrowseContainer slides={slides}/>
      
    
}
