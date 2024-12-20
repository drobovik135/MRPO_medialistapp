import React from 'react';
import MyListTable from '/'

const UniqueListsTablePage = ({ listsData }) => {
  return (
    <div className="unique-lists-table-container">
      <h2>Unique Lists</h2>
      <div className="table">
        {listsData?.map((list, index) => (
          <MyListTable data={list} key={index} onAddNewEntry={() => alert('')} />
        ))}
      </div>
    </div>
  );
};

export default UniqueListsTablePage;