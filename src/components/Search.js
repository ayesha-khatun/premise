import React, { useState } from 'react';
import bolticon from "../assets/images/boltIcon.svg";
import { format } from 'date-fns';
import * as data from "../data/sampleData";
const Search = () => {
    const [filter, setFilter] = useState('');
    const [currentDateTime] = useState(format(new Date(), 'yyyy/MM/dd @ kk:mm'));

    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = data.sampleData.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })

    return (
        <div className="row justify-content-center" style={{ backgroundColor: '#E7EBF1', width: '100%' }}>

            <div className="col-12 mb-5">
                <div className="mb-3 col-4 mx-auto text-center">

                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control mt-4"
                        value={filter}
                        onChange={searchText.bind(this)}
                    />
                </div>
            </div>


            {dataSearch.map((item, index) => {
                return (
                    <div className="col-md-2  m-2" key={index}>
                        <div className="card m-2  mx-auto">
                            <div className="card-body">
                                {item.originType === "automated" ? <h5 className="card-title" style={{ textTransform: 'capitalize', color: '#00b287', fontSize: '14px' }}>  <img src={bolticon} alt="bolticon"></img>{item.originType} Origin</h5> : <h5 className="card-title" style={{ textTransform: 'capitalize', color: '#8738c5', fontSize: '14px' }}>  {item.originType} Origin</h5>}
                                <h5 className="card-title-tex font-weight-bold mb-0 mt-4" >{item.name}</h5>
                                <p className="card-subtext mt-0">{item.intents}  Intents</p>
                                <button type="button" className=" btn-view">View</button>
                                <button type="button" className=" btn-remove ">Remove</button>
                            </div>
                            <div className="card-footer mx-auto">
                                <p style={{ fontSize: '.7em' }}>Last Updated :{currentDateTime}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default Search;

