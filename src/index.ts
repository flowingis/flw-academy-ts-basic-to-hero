function loadValue(): unknown {
  const rnd = Math.round(Math.random() * 100);
  return Math.random() > 0.5 ? String(rnd) : rnd;
}

let value = loadValue();

{
  const trimmed = value.trim();
}

{
  const trimmed = (value as string).trim();
}

{
  const trimmed = (<string>value).trim(); // tsx problem
}

{
  // best method
  if (typeof value === "string") {
    const trimmed = value.trim();
  } else {
    console.log("value is not of string type");
  }
}
