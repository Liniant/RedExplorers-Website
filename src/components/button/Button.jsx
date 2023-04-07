import "./btn.css"

export default function Button(props){
    return(
        <>
            <div className="btn-def col">
                {props.text}
            </div>
        </>
    )
}