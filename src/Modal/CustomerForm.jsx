import React from 'react';
import { useFormik } from 'formik';


export const CustomerForm = ({result}) => {

  const formik = useFormik({
    initialValues: {
      code: '',
      name: '',
      address: '',
      phone: '',
      email: ''
    },
    onSubmit: () => { },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="--form-container">
      <div className="--form-header">
        Agegar Cliente
      </div>
      <div className="--form-body">
        <div className="row --row-form__one">
          <div className="--customer-code__container">
            <label htmlFor="code">Rif</label>
            <input
              id="code"
              name="code"
              type="code"
              onChange={formik.handleChange}
              value={formik.values.code}
              />
          </div>
          <div className="--customer-name__container">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              />
          </div>
        </div>
        <div className="row --row-form__two">
          <div className="--customer-address__container">
            <label htmlFor="address">Dirección</label>
            <input
              id="address"
              name="address"
              type="address"
              onChange={formik.handleChange}
              value={formik.values.address}
              />
          </div>
        </div>
        <div className="row --row-form__three">
          <div className="--customer-email__container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              />
          </div>
          <div className="--customer-phone__container">
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              name="phone"
              type="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              />
          </div>
        </div>
      </div>
      <div className="--form-footer">
        <button type="submit" className="btn" onClick={() => result({ok: true, data: formik.values})} >Aceptar</button>
        <button type="submit" className="btn" onClick={() => result({ok: false, data: {}})} >Cancelar</button>
      </div>
    </form>
  )
}

