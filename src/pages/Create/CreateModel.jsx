import axios from "axios";
import { toast } from "react-toastify";

export default class CreateModel {
  async createPost(newPost) {
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      toast.success("Gönderi başarı ile oluşturuldu");
    } catch (error) {
      toast.error("Üzgünüz bir hata oluştu");
      console.log(error);
    }
  }
}
