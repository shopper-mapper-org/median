import Swal from "sweetalert2";

const errorAlert = (string = "Request Failed ☹️") => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: string,
  });
};

export { errorAlert };
