import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Form from './styles/form'

const CreateProduct = () => {
  const validate = (values) => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    }

    return errors
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    image: Yup.mixed()
      .required('An image file is required')
      .test('fileFormat', 'Image only', (value) => {
        console.log('file', value)
        console.log('type', value.type)
        return value && ['image/jpeg', 'image/png'].includes(value.type)
      }),
  })

  const formik = useFormik({
    initialValues: {
      name: 'New Product',
      image: '',
      price: 34642,
      description: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <fieldset>
        <label htmlFor="image">
          Image
          <input type="file" id="image" {...formik.getFieldProps('image')} />
          {formik.touched.image && formik.errors.image ? (
            <div>{formik.errors.image}</div>
          ) : null}
        </label>
        <label htmlFor="name">
          Product Name
          <input id="name" type="text" {...formik.getFieldProps('name')} />
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
