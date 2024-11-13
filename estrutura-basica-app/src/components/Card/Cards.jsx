import "./Card.css"
const Cards = ({ aos, aos_offset }) => {
    return (
        <div className="card" data-aos={aos} data-aos-delay={aos_offset} data-aos-anchor=".example-selector">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">Produto:</h6>
                <p className="card-text">Descrição: Some quick example text to build on the card title ...</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    );
}

export default Cards;
