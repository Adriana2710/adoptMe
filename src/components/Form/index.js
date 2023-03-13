import "./form.css"

const Form = ({children, onSubmit}) => {
    return (
        <section className="form-container">
            <form className="form" onSubmit={onSubmit}>
                {children}
            </form>
        </section>
    )
}

export default Form