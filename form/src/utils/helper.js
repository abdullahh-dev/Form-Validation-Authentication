export const handleApiCall = async (callback) => {
  try {
    const res = await callback();
    return res.data;
  } catch (error) {}
};
