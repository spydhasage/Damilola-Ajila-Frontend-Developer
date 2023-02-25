import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

const DataGrid = ({ data, perPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [currentPage, data, perPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.serial}>
              <td>{item.serial}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal-${item.serial}`}
                >
                  View Details
                </button>
                <div
                  className="modal fade"
                  id={`modal-${item.serial}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          {item.type === 'capsule' ? 'Capsule' : 'Rocket'} Details
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <ul>
                          {Object.entries(item).map(([key, value]) => (
                            <li key={key}>
                              <strong>{key}:</strong> {value.toString()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={perPage}
        totalItems={data.length}
        onPageChange={handlePageChange}
      />
    </>
  );
};

DataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  perPage: PropTypes.number.isRequired,
};

export default DataGrid;
