export default function List({ records, deleteRecord }) {
  return (
    <div>
      <h2>Kayıt Listesi</h2>
      {records.map((record) => (
        <div key={record.id}>
          <span>{record.date} - {record.description} - {record.amount}₺ - {record.category}</span>
          <button onClick={() => deleteRecord(record.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
}
