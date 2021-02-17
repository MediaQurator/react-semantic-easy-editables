import React from "react";
import ReactModal from "react-modal";

const options = [
  {id:1, text:"Asset 1"},
  {id:2, text:"Asset 2"},
  {id:3, text:"Asset 3"}
]
class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      value:this.props.selection
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (e) {

  }

  handleCloseModal (e) {
    e.stopPropagation();
    this.props.onCancel(e);
  }

  handleSave = (e) => {
    e.stopPropagation();
    this.props.onSelect(this.state.value, e)
  }

  handleOnChange = (e) => {
    const id = parseInt(e.target.value);
    const element = options.find(e => e.id === id);
    this.setState({value:{id, text:element.text}})
  }
  render () {
    console.log(this.props)
    const idValue = this.state.value ? this.state.value.id: null;
    return (
      <ReactModal
        isOpen={this.props.open}
        contentLabel="Minimal Modal Example"
      >
        <select onChange={this.handleOnChange} value={idValue}>
          {options.map(e => <option value={e.id} key={e.id}>{e.text}</option>)}

        </select>
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.handleCloseModal}>Close Modal</button>
      </ReactModal>
    );
  }
}
export default Modal;
