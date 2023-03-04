import CartImg from '../img/cart.png';

function CardWidget() {
    return (
        <div>
            <img
            alt="carritoCompras"
            src={CartImg}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />
            {' '}
            <span>8</span>
        </div>
    );
}

export default CardWidget;