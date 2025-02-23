import { ErrorMessage, Field } from 'formik';
import clsx from 'clsx';
import css from './FieldBase.module.css';

const FieldBase = ({
  label,
  name,
  type = 'text',
  placeholder,
  classNames = ['inputForm'],
  ...props
}) => {
  return (
    <div className={css.groupForm}>
      <label htmlFor={name} className={css.labelForm}>
        {label}
      </label>
      <Field
        name={name}
        type={type}
        id={name}
        className={clsx(classNames.map(className => css[className]))}
        placeholder={placeholder}
        {...props}
      />
      <ErrorMessage name={name} component="span" className={css.errorMessage} />
    </div>
  );
};

export default FieldBase;
