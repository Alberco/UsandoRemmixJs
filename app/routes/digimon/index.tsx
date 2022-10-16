import type { MetaFunction,LinksFunction } from "@remix-run/node"
import { Links,useLoaderData } from "@remix-run/react";
import { prisma } from "../../services/db"

const URL = "http://localhost:3004/digimon"

interface Digimons {
    id:number
    name:string
    img:string
    level:string
}

export const links:LinksFunction = () => {
    return [{
        rel: "stylesheet",
        href: "digimon.css"
    }]
}

export const meta:MetaFunction = ()=> ({
    title:"List Digimon"
})

export const loader = async () => {
    const digimons = await prisma.digimon.findMany()
    console.log(digimons)
    return digimons
}


export default function Digimon(){

    const d:Array<Digimons> =  useLoaderData()

    return (
        <>
            <h1>Digimons</h1>
            {
                d.map(item=>(
                    <>
                        <article key={item.id} id="article-digimon" style={{margin:"30px",textAlign:"center"}}>
                            <h2>{item.name}</h2>
                            <p><mark>{item.level}</mark></p>
                            <figure>
                                <img alt="This is a black swan" src={item.img} />
                                <figcaption>{item.name}</figcaption>
                            </figure>
                            <button>Agregar</button>
                        </article>
                    </>
                ))
            }
        </>
    )
}


/* const dataDigimon = async (url:any) => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } */
