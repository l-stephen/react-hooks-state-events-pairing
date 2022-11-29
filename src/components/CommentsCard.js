import CommentCard from "./CommentCard";
function CommentsCard({comments}){
    return(
        <div>
            <h2> {comments.length} comments</h2>
            <div>
                {comments.map((comment)=>(
                    <CommentCard key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    )
}
export default CommentsCard;
