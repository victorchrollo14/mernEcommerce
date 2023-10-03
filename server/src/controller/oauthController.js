const githubRegister = async (req, res) => {
  const code = req.query.code;
  try {
    console.log(code);
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

export { githubRegister };
