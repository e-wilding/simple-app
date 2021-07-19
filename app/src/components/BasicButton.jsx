import '../App.css'

const BasicButton = () => {

    // Change this to do anything! I told you it was basic :)
    const doAnything = () => {
        console.log("I did something!")
    }

    return (
        <button className='BasicButton' onClick={doAnything}>
            Click me!
        </button>
    )
}

export default BasicButton