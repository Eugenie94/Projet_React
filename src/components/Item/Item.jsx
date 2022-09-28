import "./Item.css";

export default function Item({title, status, children}) {
    return (
        <>
            <h2>
                <span className={`pellet ${status && "pellet--dispo"}`}>{status}</span>
                {title}
            </h2>
            <p>{}</p>
            <p>{children}</p>
        </>
    );
}






