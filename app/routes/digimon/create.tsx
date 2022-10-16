import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type {ActionFunction } from "@remix-run/node";
import { newDigimon } from '../../services/querys'


export const action:ActionFunction = async ({ request }) => {
    const form = await request.formData()
    const name = form.get("name")
    const img = form.get("img")
    const level = form.get("level")
    await newDigimon({name,img,level})
    return redirect("/digimon")
}

export default function createDigimon(){

    return (
        <>
            <h2>Create New Digimon </h2>
                <Form method="post">
                    <p>
                        <label>Name: </label><br />
                        <input name="name" type="text" />
                    </p>
                    <p>
                        <label>Img : </label><br />
                        <input name="img" type="text" />
                    </p>
                    <p>
                        <label>Level : </label><br />
                        <input name="level"  type="text" />
                    </p>

                    <button type="submit">Created Digimon</button>
                </Form>
        </>
    )
}