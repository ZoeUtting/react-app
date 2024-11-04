import { MouseEvent } from "react";

function ListGroup() {
    const items = [
        'New York',
        'Tokyo',
        'London',
        'France',
        'Ediburgh'

    ];

    const handleClick = (e: MouseEvent) => console.log(e)
 

  return (
    <>
        <h1>List</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
          {items.map((item, index) => <li 
          key={item}
          onClick={handleClick}
          className="list-group-item">{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
