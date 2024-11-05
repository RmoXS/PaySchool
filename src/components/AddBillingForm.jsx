import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddBillingForm = () => {
  const schema = Yup.object().shape({
    itemBayar: Yup.string().required("item Pembayaran wajib diisi"),
    nominalBayar: Yup.number().required("Nominal Pembayaran wajib diisi"),
    targetSiswa: Yup.string().required("Target siswa wajib diisi"),
    tenggatWaktu: Yup.date().required("Tenggat waktu wajib diisi"),
  });

  return (
    <div className="w-full flex justify-center flex-col">
      <header>
        <h1 className="text-3xl font-semibold text-center mb-10">
          Tambah Tagihan Siswa
        </h1>
      </header>
      <Formik
        initialValues={{
          itemBayar: "",
          nominalBayar: "",
          targetSiswa: "",
          tenggatWaktu: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-10">
              <Field
                type="text"
                name="itemBayar"
                placeholder="Item Pembayaran"
                className={`w-full border-2 rounded-lg py-5 pl-3  ${
                  errors.itemBayar && touched.itemBayar
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="itemBayar"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-10">
              <Field
                type="number"
                name="nominalBayar"
                placeholder="Nominal Pembayaran"
                className={`w-full border-2 rounded-lg py-5 pl-3  ${
                  errors.nominalBayar && touched.nominalBayar
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="nominalBayar"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-10">
              <Field
                as="select"
                name="targetSiswa"
                id="target"
                className={`w-full border-2 rounded-lg py-5 pl-3  ${
                  errors.targetSiswa && touched.targetSiswa
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              >
                <option value="">Pilih Target Siswa</option>
                <option value="semua siswa">Semua Siswa</option>
                <option value="2021"> Angkatan 2021 </option>
                <option value="X RPL 3"> X RPL 3 </option>
              </Field>
              <ErrorMessage
                name="targetSiswa"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-10">
              <Field
                type="date"
                name="tenggatWaktu"
                placeholder="Tenggat Waktu"
                className={`w-full border-2 rounded-lg py-5 pl-3  ${
                  errors.tenggatWaktu && touched.tenggatWaktu
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="tenggatWaktu"
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
  );
};

export default AddBillingForm;
