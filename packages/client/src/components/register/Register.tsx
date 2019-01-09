import * as React from "react";
import * as yup from "yup";
import { Form, Button, Input, Icon } from "antd";
import { withFormik, FormikErrors, FormikProps } from "formik";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class RegForm extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const {
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      touched,
      errors
    } = this.props;
    return (
      <form
        style={{ width: "400px", margin: "5rem auto" }}
        onSubmit={handleSubmit}
      >
        <Form.Item
          validateStatus={touched.email && errors.email ? "error" : ""}
          help={errors.email ? errors.email : ""}
        >
          <Input
            name="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={touched.password && errors.password ? "error" : ""}
          help={touched.password && errors.password ? errors.password : ""}
        >
          <Input
            name="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          Or <a href="">login now!</a>
        </Form.Item>
      </form>
    );
  }
}

const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough = "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required()
});

export const Register = withFormik<Props, FormValues>({
  validationSchema,
  validateOnChange: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegForm);
