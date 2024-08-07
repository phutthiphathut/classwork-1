/*
More icons at https://react-icons.github.io/react-icons/
*/

import { Container, Button, Table } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

import style from "./mystyle.module.css";

const QuotationTable = ({ data, clearDataItems, deleteByIndex }) => {
  const totalDiscount = data.reduce((sum, item) => sum + parseFloat(item.discount), 0);
  const totalAmount = data.reduce((sum, item) => sum + (item.ppu * item.qty - item.discount), 0);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price Per Unit</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.ppu}</td>
              <td>{item.qty}</td>
              <td>{item.discount}</td>
              <td>{item.ppu * item.qty - item.discount}</td>
              <td>
                <Button variant="danger" onClick={() => deleteByIndex(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td><strong>Total Discount:</strong></td>
            <td>{totalDiscount}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3"></td>
            <td><strong>Total Amount:</strong></td>
            <td>{totalAmount}</td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      <Button variant="secondary" onClick={clearDataItems}>
        Clear All
      </Button>
    </>
  );
};

export default QuotationTable;