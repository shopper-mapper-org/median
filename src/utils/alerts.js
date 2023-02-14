import Swal from "sweetalert2";

const errorAlert = () => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Request Failed ☹️",
  });
};

export { errorAlert };
