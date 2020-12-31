import React, { Component } from 'react'

export default class TodoInput extends Component {
   render() {
      const { item, handleChange, handleSubmit, editItem } = this.props;

      return (
         <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
               <div className="input-group">
                  <div className="input-group-prepend">
                     <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book"></i>
                     </div>
                  </div>
                  <input
                     type="text"
                     className="form-control text-capitalize"
                     placeholder="add a todo item"
                     value={item}
                     onChange={handleChange}
                  />
               </div>
               <div className="col text-center">
                  <button
                     type="submit"
                     className={`btn btn-${editItem ? 'success' : 'primary'} mt-3 px-5 text-capitalize`}
                  >
                     {editItem ? 'edit item' : 'add item'}
                  </button>
               </div>
            </form>
         </div>
      )
   }
}