import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormStyles from './styles/form-styles'

const PictureInput = ({ form, field }) => (
  <input
    name={field.name}
    type="file"
    accept="image/*"
    onChange={({ target: { files } }) =>
      form.setFieldValue(field.name, files[0])
    }
  />
)

const CreateProduct = () => {
  return (
    <Formik
      initialValues={{
        name: 'New Product',
        image: null,
        price: 34642,
        description: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Product name is required'),
        image: Yup.mixed()
          .required('An image file is required')
          .test('fileFormat', 'Image only', (value) => {
            console.log('file', value)
            return value && ['image/jpeg', 'image/png'].includes(value.type)
          }),
        price: Yup.number().required('Price is required').positive().integer(),
        description: Yup.string(),
      })}
      onSubmit={(values) => console.log(values)}
    >
      <FormStyles>
        <Form>
          <fieldset>
            <label htmlFor="image">
              Image
              <Field name="image" component={PictureInput} />
              <ErrorMessage name="image" component="span" />
            </label>
            <label htmlFor="name">
              Product Name
              <Field name="name" />
              <ErrorMessage name="name" />
            </label>
            <label htmlFor="price">
              Price
              <Field name="price" />
              <ErrorMessage name="price" component="span" />
            </label>
            <label htmlFor="description">
              Description
              <Field name="description" component="textarea" />
              <ErrorMessage name="description" />
            </label>
            <button type="submit">+ Add Product</button>
          </fieldset>
        </Form>
      </FormStyles>
    </Formik>
  )
}

CreateProduct.propTypes = {}

export default CreateProduct
