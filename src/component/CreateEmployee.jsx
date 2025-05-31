import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const CreateEmployee = () => {
  const [emp, setEmp] = useState({ name: "", address: "", phone: "", dob: "", photo: "" });
  const { addEmployee } = useContext(EmployeeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setEmp({ ...emp, photo: reader.result });
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(emp);
    setEmp({ name: "", address: "", phone: "", dob: "", photo: "" });
    alert("Employee added!");
  };

  return (
    <div
      style={{
        // backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5b03aa4f31d4df8db1fccf03/1549012398465-9ERRZCILL7IY966O6I9E/TWorks+building.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        paddingTop: "64px", // Increased top padding
      }}
    >
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-2xl shadow-md max-w-xl mx-auto mt-8 text-white">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Create Employee</h2>
        <input
          name="name"
          placeholder="Name"
          value={emp.name}
          onChange={handleChange} 
          required
          className="w-full mb-4 px-4 py-2 bg-gray-700 text-white border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="address"
          placeholder="Address"
          value={emp.address}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 bg-gray-700 text-white border border-purple-300 rounded-md"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={emp.phone}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 bg-gray-700 text-white border border-purple-300 rounded-md"
        />
        <input
          name="dob"
          type="date"
          value={emp.dob}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 bg-gray-700 text-white border border-purple-300 rounded-md"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhoto}
          className="w-full mb-6 px-4 py-2 text-white bg-violet-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-600 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
