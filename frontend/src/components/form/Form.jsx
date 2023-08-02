
import './Form.css'


export default function FormCreate({onSubmit}) {

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-container">
            <h1>Crear tarea</h1>

            <label>Titulo:</label>
            <input maxLength={10} name='title' type="text" id="email" placeholder="" required />

            <label>Description:</label>
            <textarea maxLength={20} name='description' id="message" placeholder="Your message" required></textarea>

            <button type="submit">Crear</button>
            </div>

        </form>
    )
}
