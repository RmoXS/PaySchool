import Navbar1 from "./Navbar1";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddUserSiswa = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Format email tidak valid")
      .required("Email wajib diisi"),
    password: Yup.string()
      .min(6, "Password minimal 6 karakter")
      .required("Password wajib diisi"),
    namaSiswa: Yup.string().required("Nama Siswa wajib diisi"),
    nis: Yup.number()
      .typeError("NIS harus berupa angka")
      .required("NIS wajib diisi"),
    namaKelas: Yup.string().required("Nama Kelas wajib diisi"),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50 p-6 font-montserrat xl:min-w-[1728px]">
      <div className="container bg-white rounded-lg shadow-lg overflow-hidden">
        <Navbar1 />
        <div className="flex justify-center bg-secondary">
          <div className="space-x-56 pt-2">
            <button className="font-bold px-4 py-2 text-white">
              Catatan Tagihan
            </button>
            <button className="font-bold px-4 py-2 text-white">
              Tambah Tagihan
            </button>
            <button className="font-bold px-8 py-2 rounded-t-lg bg-white">Siswa</button>
          </div>
        </div>
        <section className="pt-6 mx-20 mt-5">
          <div className="w-full flex justify-center flex-col">
            <header>
              <h1 className="text-3xl font-semibold text-center mb-10">
                Tambah User
              </h1>
            </header>
            <Formik
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
              }}
              initialValues={{
                namaSiswa: "",
                nis: "",
                namaKelas: "",
                email: "",
                password: "",
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-10">
                    <Field
                      type="text"
                      name="namasiswa"
                      placeholder="Nama Siswa"
                      className={`w-full border-2 rounded-lg py-5 pl-3  ${
                        errors.namaSiswa && touched.namaSiswa
                          ? `border-red-500`
                          : `border-gray-400`
                      }`}
                    />
                    <ErrorMessage
                      name="namasiswa"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-10">
                    <Field
                      type="number"
                      name="nis"
                      placeholder="NIS"
                      className={`w-full border-2 rounded-lg py-5 pl-3 ${
                        errors.nis && touched.nis
                          ? "border-red-500"
                          : "border-gray-400"
                      }`}
                    />
                    <ErrorMessage
                      name="nis"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-10">
                    <Field
                      type="text"
                      name="namakelas"
                      placeholder="Nama Kelas"
                      className={`w-full border-2 rounded-lg py-5 pl-3 ${
                        errors.namaKelas && touched.namaKelas
                          ? "border-red-500"
                          : "border-gray-400"
                      }`}
                    />
                    <ErrorMessage
                      name="namakelas"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-10">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className={`w-full border-2 rounded-lg py-5 pl-3 ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-400"
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-10">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className={`w-full border-2 rounded-lg py-5 pl-3 ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-400"
                      }`}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-btn rounded-lg py-5 pl-3 text-xl text-white font-semibold"
                  >
                    Tambah
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddUserSiswa;
