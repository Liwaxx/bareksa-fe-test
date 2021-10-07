import React , { useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import "./style.css";


function Calendar (){  

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <div className="card">
      <div className="card-body p-0 d-flex justify-content-center">
      <DateRange
          showDateDisplay={false}
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          dragSelectionEnabled={false}
          ranges={state}
          rangeColors={['#8772B0']}
          fixedHeight={true}
      />
      </div>
      <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-secondary btn-sm mr-4">Cancel</button>
          <button className="btn btn-success btn-sm">Filter</button>
      </div>
    </div>
  );
};

export default Calendar;