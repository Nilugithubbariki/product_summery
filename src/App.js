import React, { useState } from "react";
import "./App.css";

const initialData = [
  {
    id: 1,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Active",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 2,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Inactive",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 3,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Active",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 4,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Inactive",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 5,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Active",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 6,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Inactive",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 7,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Active",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 8,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Inactive",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 9,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Active",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 11,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Inactive",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 12,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Active",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 13,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Inactive",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 14,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Active",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 15,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Inactive",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
  {
    id: 16,
    shipiify: 17713,
    date: "2024-02-17",
    status: "Active",
    customer: "Ahmed",
    email: "example2@example.com",
    country: "Australia",
    shipping: "Australian Post Api",
    sourse: "ShopifyAU",
    ooertype: "Customer",
  },
];
const itemsPerPage = 5;
const App = () => {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    const filtered = data.filter((item) => item.status === selectedStatus);
    setFilteredData(filtered);
  };

  const handleEdit = (id) => {
    console.log(`Edit item with id ${id}`);
  };

  return (
    <div className="container">
      <div className="upperbox">
        <div className="search-bar">
          <label htmlFor="" className="flabelStyel">
            What are you looking for?
          </label>
          <br />
          <input
            className="SearchStyle"
            type="text"
            placeholder="Search by email"
            onChange={handleSearch}
          />
        </div>
        <label htmlFor="" className="clableStyle">
          Category
        </label>

        <select onChange={handleStatusChange} className="categoryStyle">
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <label htmlFor="" className="slabelStyle">
          Status
        </label>
        <select onChange={handleStatusChange} className="statusStyle">
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button className="searchStyle">Search</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Shipiify</th>
            <th>Date</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Country</th>
            <th>Shipping</th>
            <th>Sourse</th>
            <th>Ooer type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData
            ?.filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.country.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            ?.map((item) => (
              <tr key={item.id}>
                <td>
                  {" "}
                  <input type="checkbox" />
                  {item.id}
                </td>
                <td>{item.shipiify}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.customer}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.shipping}</td>
                <td>{item.sourse}</td>
                <td>{item.ooertype}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>
                    <i class="bi bi-pencil-square"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
