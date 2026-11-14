import "./Form.css"

export default function Form () {
    return(
        <div className="form">
            <form>
                <label>Nombre</label>
                <input type="text"/>
                <label>Email</label>
                <input type="email"/>
                <label>Asunto</label>
                <input type="text"/>
                <label>Mensaje</label>
                <textarea name="" id="" rows="6"></textarea>
                <button className="btn">Enviar</button>
            </form>
        </div>
    );
};