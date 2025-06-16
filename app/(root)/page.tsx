import { auth } from "@/auth";
import Searcher from "../../components/searcher";
import { title } from "process";
import { StartupSnapshot } from "v8";
import StartupCard from "@/components/StartupCard";

export default async function Home( {searchParams}: { searchParams: Promise<{ query?: string }> }) {

    const query  = (await searchParams).query;

    const posts = [
        {
        _createdAt: new Date(),
        views: 57,
        author: {_id: 1},
        _id: 1,
        description: "This is the content of post 1. Im hving fun",
        image: 'https://www.google.com/imgres?q=free%20live%20image%20of%20a%20laptop&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F28823298%2Fpexels-photo-28823298%2Ffree-photo-of-live-streaming-setup-with-laptop-in-focus.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Flive-streaming-setup-with-laptop-in-focus-28823298%2F&docid=rAqsJ1WPj5jbOM&tbnid=l4kgyJPpiAytpM&vet=12ahUKEwjZnpvguvWNAxVKzwIHHSehEBwQM3oECBcQAA..i&w=905&h=750&hcb=2&ved=2ahUKEwjZnpvguvWNAxVKzwIHHSehEBwQM3oECBcQAA',
        category: "Technology",
        title: "Post 1",
        },
    ];

    return (
        <><section className="lightblue_container">
            <h1 className="heading">main home page</h1>
            <p className="sub-heading"> This is to test sub head</p>
            <Searcher query={query} />

        </section>
        
        
        
        <section className="section_container">
            <p className="text-30-semibold"> {query ? `You searched for: ${query}` : "No search query provided."} </p>

            <ul className="mt-7 card-grid">
                {posts?.length > 0 ? (
                    posts.map((post: StartupCardType) => (
                        <StartupCard key={post?._id} post={post}  />
                    ))
                ) : (
                    <p className="no-result">No posts/projects/startups found.</p>
                )}

            </ul>  
            
        </section>
        
        
        
        </>
    );

}