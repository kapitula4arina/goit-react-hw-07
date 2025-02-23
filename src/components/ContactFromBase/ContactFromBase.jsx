import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldBase from '../FieldBase/FieldBase';
import css from './ContactFromBase.module.css';

const ContactFormBase = ({ onSubmit, initialValues, contentBtn }) => {
  const formatPhoneNumber = value => {
    let digits = value.replace(/\D/g, '').slice(0, 10);

    let formattedNumber = '';
    if (digits.length > 0) formattedNumber += digits.slice(0, 3);
    if (digits.length > 3) formattedNumber += '-' + digits.slice(3, 6);
    if (digits.length > 6) formattedNumber += '-' + digits.slice(6, 8);
    if (digits.length > 8) formattedNumber += '-' + digits.slice(8, 10);

    return formattedNumber;
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.contactForm}>
          <FieldBase
            type="text"
            label="Name"
            name="name"
            placeholder="Enter name"
          />

          <FieldBase
            type="tel"
            label="Number"
            name="number"
            placeholder="xxx-xxx-xx-xx"
            value={values.number}
            onChange={e =>
              setFieldValue('number', formatPhoneNumber(e.target.value))
            }
          />

          <button type="submit" className={css.buttonForm}>
            {contentBtn}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactFormBase;
