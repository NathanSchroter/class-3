import { useEffect, useState } from "react"
import Header from "@/componets/header"
import Footer from "@/componets/footer"

export default function ExampleOne () {
    const [number, setNumber] = useState(0);
    /**
     * This will cause and infinit loop usually
     * best to not do this incase your code breask
     * code o pages will run two times
     * once to render what we wamt amd ampther is to 
     * render stict mode to find any common bugs
     */
     
    useEffect (() => {
        console.log(number);
    })
    return(
       
        <>
        <Header/>
        <main> 
            <h1>Example 1</h1>
            <div>Infinit loop</div>
            {number}
        </main>
        <Footer/>
        </>

    )
}