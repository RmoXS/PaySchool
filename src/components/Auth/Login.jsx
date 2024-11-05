import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Email yang anda masaukan tidak valid').required('Email wajib diisi'),
    password: Yup.string().min(6, 'Password minimal 6 karakter').required('Password wajib diisi'),
  });
  return (
    <div className="container 2xl:min-w-[1728px] font-montserrat">
      <div className="flex h-screen flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold pb-[46px]">Admin PaySchool</h1>
        <p className="text-2xl font-medium pb-[91px]">
          Silahkan login dengan email dan password anda
        </p>
        <Formik
          initialValues={{
            email:'',
            password:'',
          }}
          validationSchema={schema}
          onSubmit={(values) => {console.log(values)}}
        >
          {({ errors, touched }) => (
        <Form className="w-[545px]">
          <div className="mb-[53px]">
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={`w-full pl-8 py-8 border-2 rounded-lg text-2xl ${ errors.email && touched.email ? "border-red-500" : "border-gray-800"}`}
          />
          <ErrorMessage 
            name="email"
            component='div'
            className="text-red-500 text-sm"
          />
          </div>
          <div className="mb-[53px]">
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={`w-full pl-8 py-8 border-2 rounded-lg text-2xl ${ errors.password && touched.password ? "border-red-500" : "border-gray-800"}`}
          />
          <ErrorMessage 
            name="password"
            component='div'
            className="text-red-500 text-sm"
          />
          </div>
          <button className="bg-btn w-full p-8 rounded-lg text-[32px] font-bold text-primary" type="submit">
            Login
          </button>
        </Form>
        )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
