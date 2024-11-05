import { useNavigate } from "react-router-dom";

const ListSiswa = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/tambah-user")
    }

  return (
    <div>
        <div className="flex justify-end">
            <button onClick={() => handleNext()} className="bg-btn py-2 px-4 mb-6 rounded-xl text-primary text-lg font-semibold"> Tambah Siswa </button>
        </div>
      <table className="w-full text-left">
        <thead className="text-xl font-semibold text-primary bg-secondary">
          <tr>
            <th className="p-3">NO</th>
            <th className="p-3">NIS</th>
            <th className="p-3">NAMA</th>
            <th className="p-3">KELAS</th>
            <th className="p-3">EMAIL</th>
            <th className="p-3">PASSWORD</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          <tr>
            <td className="p-3">1</td>
            <td className="p-3">1000</td>
            <td className="p-3">Anissa</td>
            <td className="p-3">XII RPL 3</td>
            <td className="p-3">nisa1000@students.com</td>
            <td className="p-3">nisa1234</td>
          </tr>
          <tr>
            <td className="p-3">2</td>
            <td className="p-3">1001</td>
            <td className="p-3">Dwi</td>
            <td className="p-3">XI RPL 3</td>
            <td className="p-3">dwi1001@students.com</td>
            <td className="p-3">dwi1234</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListSiswa;
