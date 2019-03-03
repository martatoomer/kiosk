import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import Icon from '@material-ui/core/Icon';


function createBoolColumn(name) {
  return {
    name: name,
    options: {
      customBodyRender: function(value) {
        return value ? <Icon>check</Icon> : <Icon>close</Icon>;
      }
    }
  };
} 
const columns = ["ID","Title","Dates", createBoolColumn('On Sale'),createBoolColumn('Published'),createBoolColumn('Featured'),"Tags","Actions"];

let id = 0;
function createData(title, dates, onsale, published, featured, tags, actions) {
  id += 1;
  return [ id, title, dates, onsale, published, featured, tags, actions ];
}

const data = [
  createData('Historic Theatre Tours', 'Sep 3, 2018-Mar 28, 2019', true, false, true, ['International Dance Series'], null),
  createData('Historic Theatre Tours', 'Sep 3, 2018-Mar 28, 2019', true, false, true, ['International Dance Series'], null),
  createData('Historic Theatre Tours', 'Sep 3, 2018-Mar 28, 2019', true, false, true, ['International Dance Series'], null),
  createData('Historic Theatre Tours', 'Sep 3, 2018-Mar 28, 2019', true, false, true, ['International Dance Series'], null),
  createData('Historic Theatre Tours', 'Sep 3, 2018-Mar 28, 2019', true, false, true, ['International Dance Series'], null),
];

console.log(data);

const options = {
  filterType: 'checkbox',
};

function ProductionTable() {
  return (
    <MUIDataTable
      title={"Productions"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default ProductionTable;