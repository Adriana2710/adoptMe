import '../Input/input.css'

const TextArea = ({id, name, rows, cols, placeholder}) => {
    return (
        <textarea className='input-textArea' id={id} name={name} rows={rows} cols={cols} placeholder={placeholder}></textarea>
    )
}

export default TextArea