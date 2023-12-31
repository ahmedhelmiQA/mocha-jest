function checkName(name) {
  if (name.includes("@")) {
    return "USER";
  } else if (name.includes(".")) {
    return "USER";
  } else {
    return name;
  }
}

export default checkName;

