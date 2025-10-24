import { toast } from "react-toastify";

export const getWishList = () => {
  try {
    const storedWishListIds = localStorage.getItem("wishlist");
    return storedWishListIds ? JSON.parse(storedWishListIds) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const setWishList = (carId) => {
  const wishlist = getWishList();
  try {
    const isDuplicate = wishlist.some((wishId) => wishId == carId);

    if (isDuplicate) {
      toast.warning("Game already in wishlist!");
      return;
    }
    const updatedWishList = [...wishlist, carId];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
    toast.success("Game added to wishlist!");
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishList = (carId) => {
  const wishList = getWishList();
  const updatedList = wishList.filter((wishId) => wishId !== carId);
  localStorage.setItem("wishlist", JSON.stringify(updatedList));
  toast.warning("Remove from the wishlist!");
};
