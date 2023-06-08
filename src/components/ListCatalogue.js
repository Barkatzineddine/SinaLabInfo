import React, { useState } from "react";
import "./ListCatalogue.css";
import Select from "react-select";
import CatalogueItem from "./CatalogueItem";
import data from '../data.js'
import ReactPaginate from "react-paginate";


const options=[
  {label:'A',value:'A'},
  {label:'B',value:'B'},
  {label:'C',value:'C'},
  {label:'D',value:'D'},
  {label:'E',value:'E'},
  {label:'F',value:'F'},
]
const options1=[
  {label:'Hematologie',value:'Hematologie'},
  {label:'Immunologie',value:'Immunologie'},
  {label:'Biochimie',value:'Biochimie'},
  
]
export default function ListCatalogue() {
  const [datas,Setdatas] = useState(data)
  const [currentPage,SetcurrentPage] = useState(1)
  const [itemsPerPage,SetitemsPerPage] = useState(10)
  const filterItem = (curcat) => {
    const newItem = datas.filter((newVal) => {
      return newVal.specialite === curcat; 

    });
    Setdatas(newItem);

  };
  const filterItem1 = (curcat) => {
    const newItem = datas.filter((newVal) => {
      return newVal.name[0].toUpperCase() === curcat; 

    });
    Setdatas(newItem);
    console.log(currentItems)
  };
  
const handlePage = (data) => {
  console.log(data.selected)
  SetcurrentPage(data.selected + 1)
}
  function onChange(value) {
    filterItem(value.label)
  }
  function onChange1(value) {
    filterItem1(value.label)
  }
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = datas.slice(indexOfFirstItem,indexOfLastItem)
  return (
    <>
    <div className="list-contianer">
      <div className="list-catalogue-con">
        <h2>Catalogue des analyses</h2>
        <div className="filter-con">
        <Select options={options} className="select-filter-1" placeholder="Ordre Alphabétique " onChange={onChange1}/>
        <Select options={options1} className="select-filter-2" placeholder="Spécialité / Nature " onChange={onChange}/>
        </div>
        <div className="number-analyses"><span className="number-analyses-1">256</span><span className="number-analyses-2">Examens</span></div>
        <div className="analyses-info-container">
          {currentItems.map((data)=>(
            <CatalogueItem data={data} key={data.id}/>
          ))}
        </div>
      </div>
      
     
    </div>
    <ReactPaginate 
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={26}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePage}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />      
    </>
  );
}
