import './itemlistcontainer.css';

function ItemListContainer({greeting}) {
    return (
        <div>
            <p className='textCenter'>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;