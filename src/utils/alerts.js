import Swal from "sweetalert2";

const errorAlert = (string = "Request Failed ☹️") => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: string,
  });
};

const errorPopup = (status = null) => {
  let title;
  if (status === 500) {
    title = "Server Error...";
  } else {
    title = "Something Went Wrong...";
  }
  return Swal.fire({
    position: "top-end",
    icon: "error",
    title: title,
    showConfirmButton: false,
    timer: 2000,
  });
};

export { errorAlert, errorPopup };
