import { useState } from "react"

const Form = () => {
    const [fullname, setFullName] = useState()
    const [number, setNumber] = useState()
    const [email, setEmail] = useState()
    const [comment, setComment] = useState()



    return (
        <div>
            <form>
                <h1>Contact Form</h1>
                <div>
                    <label htmlFor="fullname">Fulde navn</label>
                    <input type="text" name="fullname" id="fullname" onChange={e => { setFullName(e.target.value) }}/>
                </div>
                <div>
                    <label htmlFor="number">Telefonnummer</label>
                    <input type="number" name="number" id="number" onChange={e => { setNumber(e.target.value) }}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={e => { setEmail(e.target.value) }}/>
                </div>
                <div>
                    <label htmlFor="comment">Kommentar</label>
                    <textarea type="text" name="comment" id="comment" onChange={e => { setComment(e.target.value) }}/>
                </div>
                <div>
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>
                <div>
                    <button type="reset">Nulstil</button>
                    <button type="submit">Send</button>
                </div>
            </form>
            <section>
                <ul>
                    <li>Fulde navn: {fullname}</li>
                    <li>Telfonnummer: {number}</li>
                    <li>Email: {email}</li>
                    <li>Kommentar: {comment}</li>
                </ul>
            </section>
        </div>
    )
}

export default Form