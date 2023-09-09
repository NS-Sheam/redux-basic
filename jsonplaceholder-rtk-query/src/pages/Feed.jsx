import { useForm } from "react-hook-form";
import PostCard from "../components/PostCard";
import { useGetPostQuery, useSetPostMutation } from "../redux/features/api/baseApi";

const Feed = () => {
    const { data: posts, isLoading, isError, error } = useGetPostQuery();
    const { register, handleSubmit } = useForm();

    const [setPost, { data: postData, isLoading: mutationLoading }] = useSetPostMutation();

    console.log(postData);

    const onSubmit = (data) => {
        setPost(data);
    }

    if (isLoading || mutationLoading) {
        return <p className="text-6xl font-bold text-center">Loading....</p>
    }
    if (!isLoading && isError) {
        return <p className="text-6xl font-bold text-center">Something went wrong....</p>
    }
    return (
        <div className="bg-zinc-900">
            <h1>Feed</h1>
            {/* <div className="flex flex-col gap-3">
                {
                    posts?.map(post => <PostCard key={post.id} post={post} />)
                }
            </div> */}
            <div className="my-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="text-zinc-300 bg-zinc-800 p-3 rounded-md" {...register("post")} />
                    <button type="submit" className="bg-zinc-800 text-zinc-300 text-lg p-3 border border-zinc-300 rounded-md">Post</button>
                </form>
            </div>
        </div>
    );
};

export default Feed;