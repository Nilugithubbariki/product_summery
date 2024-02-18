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
  const [currentpage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editedCountry, setEditedCountry] = useState("");
  const StartIndex = (currentpage - 1) * itemsPerPage;
  const EndIndex = StartIndex + itemsPerPage;
  const currentData = data.slice(StartIndex, EndIndex);
  const handlePage = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleEdit = (id, country) => {
    setEditingId(id);
    setEditedCountry(country);
  };
  const handleSave = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, country: editedCountry } : item
    );
    setData(updatedData);
    setEditingId(null);
  };
  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    const filtered = data.filter((item) => item.status === selectedStatus);
    setFilteredData(filtered);
  };
  const clickMe = () => {
    alert("Wellcome!");
  };
  const clickSearch = () => {
    alert(
      "As of now please search your country name in search box only. Then you will get your country name!!!!"
    );
  };
  const dispatch = () => {
    alert("Dispatch selected!!!");
  };
  return (
    <div className="container">
      <div className="topStyle">
        <h1>Orders</h1>
        <button className="createStyle" onClick={clickMe}>
          CREATE NEW
        </button>
      </div>
      <div className="upperbox">
        <div className="search-bar">
          <label htmlFor="" className="flabelStyel">
            What are you looking for?
          </label>
          <br />
          <div className="searchIcon">
            <i class="bi bi-search"></i>
            <input
              className="SearchStyle"
              type="text"
              placeholder="Search by country"
              onChange={handleSearch}
            />
          </div>
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
        <button className="searchStyle" onClick={clickSearch}>
          Search
        </button>
      </div>
      <div className="productStyle">
        <h4 className="pstyle">Product summery</h4>
        <div className="midContainer">
          <select className="midselectStyle">
            <option value="">All COLUMN</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button className="dbuttomStyle" onClick={dispatch}>
            DISPATCH SELECTED
          </button>
          <div className="navpage">
            <nav aria-label="Page navigation example ">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span
                      aria-hidden="true"
                      onClick={() => handlePage(currentpage - 1)}
                      disabled={currentpage === 1}
                    >
                      &laquo;
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePage(currentpage + 1)}
                    disabled={currentpage === 1}
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePage(currentpage + 2)}
                    disabled={currentpage === 2}
                  >
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span
                      aria-hidden="true"
                      onClick={() => handlePage(currentpage + 1)}
                      disabled={currentpage === 1}
                    >
                      &raquo;
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Shipiify</th>
              <th>Date</th>
              <th>Status</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Country</th>
              <th>Shipping</th>
              <th>Sourse</th>
              <th>Ooertype</th>
            </tr>
          </thead>
          <tbody>
            {currentData
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.country.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map(
                ({
                  id,
                  shipiify,
                  date,
                  status,
                  customer,
                  email,
                  country,
                  shipping,
                  sourse,
                  ooertype,
                }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{shipiify}</td>
                    <td>{date}</td>
                    <td>{status}</td>
                    <td>{customer}</td>
                    <td>{email}</td>
                    <td>
                      {editingId === id ? (
                        <input
                          type="text"
                          value={editedCountry}
                          onChange={(e) => setEditedCountry(e.target.value)}
                        />
                      ) : (
                        country
                      )}
                    </td>
                    <td>{shipping}</td>
                    <td>{sourse}</td>
                    <td>
                      {ooertype}{" "}
                      {editingId === id ? (
                        <i
                          class="bi bi-save"
                          onClick={() => handleSave(id)}
                        ></i>
                      ) : (
                        <i
                          class="bi bi-pencil-square"
                          onClick={() => handleEdit(id, country)}
                        ></i>
                      )}
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;
