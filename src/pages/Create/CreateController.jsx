import { v4 } from "uuid";
import CreateView from "./CreateView";
import CreateModel from "./CreateModel";
import { useNavigate } from "react-router-dom";

const CreateController = () => {
  const model = new CreateModel();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());
    newPost.id = v4();

    model.createPost(newPost).then(() => navigate("/"));
  };

  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
