import { useState } from "react"

const Form = () => {
    const [form, setForm] = useState({}, {
        fullname: '...',
        number: '...',
        email: '...',
        comment: '...'
    })

    const registerInput = e => {
        setForm(prevState => {
            return { ...prevState, [e.target.name]: e.target.value}
        })
        console.log(form);
    }

    return (
        <div className="maindiv">
            <form>
                <h1>Kontakt Form</h1>
                <div className="formlabels">
                    <label htmlFor="fullname">Fulde navn</label>
                    <input type="text" name="fullname" id="fullname" onChange={registerInput}/>
                </div>
                <div className="formlabels">
                    <label htmlFor="number">Telefonnummer</label>
                    <input type="number" name="number" id="number" onChange={registerInput}/>
                </div>
                <div className="formlabels">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={registerInput}/>
                </div>
                <div className="formlabels">
                    <label htmlFor="comment">Kommentar</label>
                    <textarea type="text" name="comment" id="comment" onChange={registerInput}/>
                </div>
                <div className="checkboxes">
                    <p>
                        <input type="checkbox" />
                        <label htmlFor="">Vil gerne kontaktes på email</label>
                    </p>
                    <p>
                        <input type="checkbox" />
                        <label htmlFor="">Vil gerne kontaktes på mobil</label>
                    </p>
                </div>
                <div>
                    <button type="reset">Nulstil</button>
                    <button type="submit">Send</button>
                </div>
            </form>
            <section>
                <ul>
                    <li>Fulde navn: {form.fullname}</li>
                    <li>Telfonnummer: {form.number} </li>
                    <li>Email: {form.email}</li>
                    <li>Kommentar: {form.comment}</li>
                </ul>
            </section>
        </div>
    )
}

export { Form }