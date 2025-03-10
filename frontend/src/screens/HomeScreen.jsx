import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
       <h1>Lastest Products</h1> 
       <Row>
            {products.map(product => (
            <Col key={product} sm={12} md={6} lg={4} xl={3}>
                <Products product={product} />
            </Col>
            ))}
       </Row>
    </>
  )
}

export default HomeScreen