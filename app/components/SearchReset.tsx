"use client";
import { X } from "lucide-react";

const SearchReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-bar') as HTMLFormElement;
        if (form) {
            form.reset();
        }
        window.location.href = "/";
    };

    return(
        <button type="button" className="search-bar_button circular"  onClick={reset}>
            <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>X</span>
        </button>
    )
}

export default SearchReset;