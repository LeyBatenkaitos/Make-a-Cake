const getUserInfo = async (email) => {
  try {
    const response = await fetch("/api/user-email", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) return { success: true, data: result };
    else return { success: false, data: result };
  } catch (err) {
    console.error(err);
  }
};

export default getUserInfo;
