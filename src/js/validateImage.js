const validateImage = async (imagePath) => {
  try {
    console.log("Checking if image exists:", imagePath);
    const response = await fetch(imagePath, { method: "HEAD" });

    return response.ok; // Return true if image exists
  } catch (error) {
    console.error("Error fetching image:", error);
    return false;
  }
};

export default validateImage;
