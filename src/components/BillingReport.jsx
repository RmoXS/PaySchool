const BillingReport = () => {
  return (
    <table className="w-full text-left">
      <thead className="text-xl font-semibold">
        <tr>
          <th className="p-3">NO</th>
          <th className="p-3">ITEM PEMBAYARAN</th>
          <th className="p-3">NOMINAL</th>
          <th className="p-3">TARGET</th>
          <th className="p-3">TENGGAT WAKTU</th>
        </tr>
      </thead>
      <tbody className="text-xl">
        <tr className="bg-blue-100">
          <td className="p-3">1</td>
          <td className="p-3">SPP Bulan Oktober</td>
          <td className="p-3">Rp.2.000.000</td>
          <td className="p-3">Semua Siswa</td>
          <td className="p-3">16/10/2024</td>
        </tr>
        <tr>
          <td className="p-3">2</td>
          <td className="p-3">Uang Gedung</td>
          <td className="p-3">Rp.5.000.000</td>
          <td className="p-3">Semua Siswa</td>
          <td className="p-3">16/10/2024</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BillingReport;
