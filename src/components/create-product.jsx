import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import Form from './styles/form'

const CreateProduct = () => {
  const validate = (values) => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      name: 'New Product',
      image: '',
      price: 34642,
      description: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div>{formik.errors.image}</div>
          ) : null}
        </label>
        <label htmlFor="name">
          Product Name
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  )
}

CreateProduct.propTypes = {}

export default CreateProduct
