import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const ShowRecords = () => {
  const { employees, deleteEmployee, updateEmployee } = useContext(EmployeeContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditData({ ...employees[index] });
  };

  const handleSave = () => {
    updateEmployee(editingIndex, editData);
    setEditingIndex(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 text-white">
      <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">Stored Records</h2>
      {employees.map((rec, i) => (
        <div key={rec.id} className="bg-gray-800 rounded-xl shadow-lg mb-6 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-shrink-0">
            {rec.photo ? (
              <img src={rec.photo} alt="Profile" className="w-28 h-28 rounded-lg object-cover border-2 border-purple-400" />
            ) : (
              <div className="w-28 h-28 rounded-lg bg-gray-600 flex items-center justify-center text-sm text-gray-400">
                No Photo
              </div>
            )}
          </div>

          <div className="flex-1 w-full">
            {editingIndex === i ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="px-4 py-2 bg-gray-700 border border-purple-300 rounded-md"
                />
                <input
                  value={editData.address}
                  onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                  className="px-4 py-2 bg-gray-700 border border-purple-300 rounded-md"
                />
                <input
                  value={editData.phone}
                  onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                  className="px-4 py-2 bg-gray-700 border border-purple-300 rounded-md"
                />
                <input
                  type="date"
                  value={editData.dob}
                  onChange={(e) => setEditData({ ...editData, dob: e.target.value })}
                  className="px-4 py-2 bg-gray-700 border border-purple-300 rounded-md"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => setEditData({ ...editData, photo: reader.result });
                    if (file) reader.readAsDataURL(file);
                  }}
                  className="col-span-full px-4 py-2 text-white bg-violet-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-600 rounded-md"
                />
                <button
                  onClick={handleSave}
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition col-span-full"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <p><strong className="text-purple-300">Name:</strong> {rec.name}</p>
                <p><strong className="text-purple-300">Address:</strong> {rec.address}</p>
                <p><strong className="text-purple-300">Phone:</strong> {rec.phone}</p>
                <p><strong className="text-purple-300">DOB:</strong> {rec.dob}</p>
              </div>
            )}
          </div>
          {editingIndex !== i && (
            <div className="flex flex-col space-y-2 md:ml-4">
              <button
                onClick={() => handleEditClick(i)}
                className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmployee(i)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowRecords;
