import { toast } from "react-hot-toast";

const toastSuccessConfig = {
  duration: 3000,
  position: "top-center",
  style: {
    background: "#F2F4F7",
    color: "#069631",
    padding: "10px",
    borderRadius: "12px",
    border: "2px solid #069631",
  },
};

const toastErrorConfig = {
  duration: 3000,
  position: "top-center",
  style: {
    background: "#F2F4F7",
    color: "#D84343",
    padding: "10px",
    borderRadius: "12px",
    border: "2px solid #D84343",
  },
};

const toastSuccess = (message) => {
  toast.success(message, toastSuccessConfig);
};

const toastError = (message) => {
  toast.error(message, toastErrorConfig);
};

export { toastSuccess, toastError };
