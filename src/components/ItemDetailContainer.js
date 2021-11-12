import  Card  from "./card";

function ItemDetailContainer(props) {
  const { item } = props;
  return (
    <div className="item-detail-container">
      <Card item={item} />
    </div>
  );
}

export default ItemDetailContainer;
