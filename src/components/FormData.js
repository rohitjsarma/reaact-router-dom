import React, { useState } from 'react';

const FormWithList = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [formList, setFormList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormList([...formList, formData]);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {formList.map((data, index) => (
          <li key={index}>
            <strong>Name:</strong> {data.name}, <strong>Email:</strong> {data.email}, <strong>Phone:</strong> {data.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormWithList;
