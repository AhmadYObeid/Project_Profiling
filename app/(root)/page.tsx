import Searcher from "../components/searcher";

export default async function Home( {searchParams}: { searchParams: Promise<{ query?: string }> }) {

    const query  = (await searchParams).query;

    return (
        <section className="lightblue_container">
            <h1 className="heading">main home page</h1>
            <p className="sub-heading"> This is to test sub head</p>
            <Searcher query={query} />
        </section>
    );

}