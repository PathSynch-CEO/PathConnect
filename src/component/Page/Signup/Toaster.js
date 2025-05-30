import toast from "react-hot-toast";

class Toaster {
  static async success(message) {
    toast.success(message, {
      position: "top-right",
      style: {
        borderRadius: "10px",
      },
    });
  }

  static async error(message) {
    toast.error(message, {
      position: "top-right",
      style: {
        borderRadius: "10px",
      },
    });
  }
}

export default Toaster;
