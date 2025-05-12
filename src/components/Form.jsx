import { useState } from "react";

export default function Form({ addRecord }) {
  const [form, setForm] = useState({
    date: "",
    description: "",
    amount: "",
    category: "Gelir",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.description || !form.amount) return;
    addRecord({ ...form, id: Date.now() });
    setForm({ date: "", description: "", amount: "", category: "Gelir" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <input type="text" name="description" placeholder="Açıklama" value={form.description} onChange={handleChange} />
      <input type="number" name="amount" placeholder="Tutar" value={form.amount} onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="Gelir">Gelir</option>
        <option value="Gider">Gider</option>
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}
