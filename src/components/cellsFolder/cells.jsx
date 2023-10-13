import "./style.css"

function Cells({color}) {

    return (
        <>  
            <div className='cell' style={{backgroundColor: color}}></div>
        </>
    )
}

export default Cells