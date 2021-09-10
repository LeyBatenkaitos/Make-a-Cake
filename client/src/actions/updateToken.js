const updateToken = async (data) => {
  try {
    const response = await fetch("/auth/update-token", {
      method: "POST",
    });

    const result = await response.json();
    if (response.ok) return { success: true, data: result };
    else return { success: false, data: result };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

export default updateToken;
