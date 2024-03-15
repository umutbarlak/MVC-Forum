import axios from "axios";
import { toast } from "react-toastify";

export default class ListModel {
  async getPosts() {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      return res.data;
    } catch (error) {
      alert("Üzgünüz bir hata oluştu");
      console.log(err);
    }
  }

  // async deletePost(id) {
  //   console.log(id);
  //   try {
  //     await axios.delete(`http://localhost:3000/posts?id=${id}`);
  //     toast.success("Silme işlemi başarılı");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Silme işlemi gerçekleşmedi");
  //   }
  // }
}
