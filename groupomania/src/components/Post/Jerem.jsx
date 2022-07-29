import { useEffect, useState } from "react";

const Post = (props) => {
    // console.log("props", props);
    // const { currentUser } = props;
    // console.log("destructuration de props", currentUser);
    const [posts, setPosts] = useState();

    useEffect(() => {
        console.log("je suis dans le useEffect");
        const fetchApi = async () => {
            try {
                const response = await fetch("http://localhost:4200/api/posts");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.log("SOMETHING WENT WRONG", error);
            }
        }

        fetchApi();
    }, []);

    const fetchApi = async () => {
        try {
            const response = await fetch("http://localhost:4200/api/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log("SOMETHING WENT WRONG", error);
        }
    }


    console.log("result posts", posts);

    return (
        console.log("result posts", posts)
    )
};

export default Post;


