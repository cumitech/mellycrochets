export const getBase64FromUrl = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const blob = await response.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
};
