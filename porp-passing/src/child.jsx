function Student(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Stack: {props.stack}</h2>
        </div>
    )
}

export default Student