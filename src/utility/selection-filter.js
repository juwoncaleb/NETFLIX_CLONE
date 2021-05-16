import React from 'react'
import { Item } from '../components/jumbotron/styles/jumbotron'

export default function selectionFilter({ series, films }) {
    return {
        // to get the titles of series
        series: [
            {
                title: 'Documentaries', data: series.filter((Item) => Item.genre === 'documentaries')
            },
            {
                title: 'Comedies', data: series.filter((Item) => Item.genre === 'comedies')
            },
            {
                title: 'Children', data: series.filter((Item) => Item.genre === 'children')
            },
            {
                title: 'Crimes', data: series.filter((Item) => Item.genre === 'crimes')
            },
            {
                title: 'Feel Good', data: series.filter((Item) => Item.genre === 'feel-good')
            },
        ],
        films:[
            {
                title: 'Drama',
                data: films.filter((Item)=>Item.genre === 'drama')
            },
            {
                title: 'Thiller',
                data: films.filter((Item)=>Item.genre === 'thriller')
            },
            {
                title: 'Children',
                data: films.filter((Item)=>Item.genre === 'children')
            },
            {
                title: 'Suspense',
                data: films.filter((Item)=>Item.genre === 'suspense')
            },
            {
                title: 'Romance',
                data: films.filter((Item)=>Item.genre === 'romance')
            },
        ]
    }

}

