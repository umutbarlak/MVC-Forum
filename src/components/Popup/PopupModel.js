import axios from "axios";
import { toast } from "react-toastify";

export default class PopupModel {
  async getUserPosts(username) {
    try {
      const res = await axios.get(
        `http://localhost:3000/posts?user=${username}`
      );

      return res.data;
    } catch (error) {
      toast.error("Gönderilere erişilemedi...");
      console.log(error);
    }
  }
}
