import { prisma } from '../services/db'

export interface dataDigimon {
    name: string | null | FormDataEntryValue
    img : string | null | FormDataEntryValue
    level: string | null |FormDataEntryValue
}

export async function newDigimon(post:any){
    return prisma.digimon.create({data:post})
} 