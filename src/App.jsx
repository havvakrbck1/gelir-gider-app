import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Chart from "./components/Chart";

function App() {
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem("records");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Form addRecord={addRecord} />
      <List records={records} deleteRecord={deleteRecord} />
      <Chart records={records} />
    </div>
  );
}

export default App;
