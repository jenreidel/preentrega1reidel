import Item from "./Item";

const ItemList = ({items}) => {

    return (
        <div className='container'>
            {items.map((item) =>
                (
                    <div key={item.id}>
                        <Item prodSelec={item} />
                    </div>
                )
            )}
        </div>
    )
}

export default ItemList;
