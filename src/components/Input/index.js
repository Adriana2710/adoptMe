import "./input.css"

const Input = ({ type, id, name, value, setState, required = false, placeholder}) => {

    const onChange = (e) => {
        setState(e.target.value)
    }

    return (
        <input className="input-textArea" type={type} id={id} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder}/>
    )
}

export default Input