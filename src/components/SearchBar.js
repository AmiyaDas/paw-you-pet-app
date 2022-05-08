import React from 'react'
import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <button type="submit"><MdSearch /></button>
      <input type="text" placeholder="Search.." name="search"/>
  </div>
//   <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <button class="btn btn-outline-secondary" type="button" id="button-addon1"><MdSearch /></button>
//   </div>
//   <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
// </div>
  )
}
