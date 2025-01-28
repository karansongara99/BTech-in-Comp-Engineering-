export default function BtnEvents() {
    const  btnev = () =>{
        alert("Button clicked");
    }

    const  btnmoe = () =>{
        var a = prompt("Enter Detail")
        console.log(a);      
    }
    
    return(
        <>
        <button onClick={btnmoe}>  Prompt</button>
        <br></br>
        <button onClick={btnev}>  Alert</button>
        </>
    )
}