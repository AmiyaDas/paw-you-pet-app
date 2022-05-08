import React from 'react'
import { MdMenu,MdLocationPin } from "react-icons/md";
import SearchBar from './SearchBar';

export default function Header() {
    return (
        <nav class="navbar navbar-light bg-light px-2">
            <MdMenu className="mdIcon"/>
            <a class="navbar-brand">PawYou</a>
            <SearchBar />
            <MdLocationPin className="mdIcon" />
        </nav>
    )
}
