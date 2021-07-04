import { toast, Slide, Zoom, Flip, Bounce } from "react-toastify";

export const SuccessMessage = (
  message = "succes",
  pos = "top-right",
  close = 5000,
  trans = Zoom
) => {
  toast.success(message, {
    position: pos,
    autoClose: close,
    hideProgressBar: true,
    onClose: true,
    transition: trans,
  });
  console.log(
    "🚀 ~ file: ToastMessage.jsx ~ line 10 ~ SuccessMessage ~ SuccessMessage",
    SuccessMessage
  );
};

export const ErrorMessage = (
  message = "error",
  pos = "top-right",
  close = 5000,
  trans = Zoom
) => {
  toast.error(message, {
    position: pos,
    autoClose: close,
    hideProgressBar: true,
    onClose: true,
    transition: trans,
  });
};
