import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";
import { useEffect, useState } from 'react';
import ItemCount from "./ItemCount";


const ItemListContainer = (props) => {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [modalPhoto, setModalPhoto] = useState(false);
    const [form, setForm] = useState("");

  useEffect(() => {
    setData(props.products);
  },[]);
  
 const mostrarModalPhoto = (productimg) => {
    setModalPhoto(true);
    setForm(productimg);
  };

  const cerrarModalPhoto = () => {
    setModalPhoto(false);
  };

  const hardCodedDelete = (productId) => {
    let newListOfProducts = data.filter(product => productId !== product.id);
  setData(newListOfProducts);
}

  const submitHandler = (e) => {
    e.preventDefault();
    let filterProducts = props.products.filter(dato => dato.name.includes(keyword.toLowerCase()));
    setData(filterProducts);
  }

  return (
    <>
      <Container>
      <br />
      {/* SearchForm */}
            <div>
                <form
                onSubmit={submitHandler}
                >
                <label htmlFor="keyword">
                Search
                <input
                    id="keyword"
                    value={keyword}
                    placeholder="Search Keyword"
                    onChange={(e) => setKeyword(e.target.value)}
                />
                </label>
                <button>Submit</button>
            </form>
            </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Imagen</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {data.map(dato => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.name}</td>
                <td>{dato.stock}</td>
                <td>{dato.price}</td>
                <td>
                  <ItemCount/>
                  <Button
                    color="primary"
                    onClick={() => mostrarModalPhoto(dato.img[0])}
                  >
                    Ver Foto
                  </Button>{" "}
                  <Button color="danger" onClick={() => hardCodedDelete(dato.id)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalPhoto}>
        <ModalHeader>
         <div><h3>Foto del producto</h3></div>
        </ModalHeader>

        <ModalBody>
          <img src={Form} width="300" alt="Product image" />
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            onClick={cerrarModalPhoto}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>

    </>
  );
};

export default ItemListContainer;