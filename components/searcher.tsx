import React from "react";
import Form from "next/form";
import SearchReset from "./SearchReset";

const Searcher = ({ query }: { query?: string }) => {
    return (
        <Form action="/" scroll={false} className="search-bar">
            <input
                name="query"
                className="search-bar_input"
                placeholder="Search..."
                defaultValue={query || ""}
            />
            <div className="flex gap-2">
                {query && <SearchReset />}
            </div>
        </Form>
    );
};

export default Searcher;