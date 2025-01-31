const validateImage = async (imagePath) => {
  try {
    const response = await fetch(imagePath, { method: "HEAD" });

    return response;
  } catch (error) {
    console.error("Error fetching image:", error);
    return false;
  }
};

export default validateImage;
