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
            console.log('file type', value.type)
            return value && ['image/jpeg', 'image/png'].includes(value.type)
          }),
      })}
      onSubmit={(values) => console.log(values)}
    >
      <FormStyles>
        <Form>
          <fieldset>
            <label htmlFor="image">
              Image
              <Field name="image" component={PictureInput} />
              <ErrorMessage name="image" />
            </label>
            <label htmlFor="name">
              Product Name
              <Field name="name" />
              <ErrorMessage name="name" />
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
