import { formatDate } from "@/lib/utils";

const StartupCard = ({post}: {post: StartupCardType }) => {
    return (

        <li className="group">
            <div className="flex-between"> 
                <p className="blog-post"> {formatDate(post._createdAt)} </p>

                
            </div>
        </li>

    )
}
export default StartupCard;