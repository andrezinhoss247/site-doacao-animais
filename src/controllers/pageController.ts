import {Request, Response} from 'express'

import {createMenuObject} from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
    res.render('pages/home', {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        }
    }
    )
        
}

export const dogs = (req: Request, res: Response) => {
    
    res.render('pages/home', {
        menu: createMenuObject('dog'),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        }}
    )
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/home', {
        menu: createMenuObject('cat'),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        }}
    )
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/home', {
        menu: createMenuObject('fish'),
        banner: {
            title: "Fishs",
            background: "banner_fish.jpg"
        }}
    )
}

export const search = (req: Request, res: Response) => {
    //res.render('pages/search')
}