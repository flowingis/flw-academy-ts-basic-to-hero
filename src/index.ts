// no this parameters
{
  console.log("No this parameters --> start");
  function double(): void {
    // @ts-ignore
    this.value = this.value * 2;
    // @ts-ignore
    console.log("value after double", this.value);
  }

  const x = {
    vale: 3, // name different from value
    double,
  };

  x.double();

  console.log("Value", x.vale);

  console.log("No this parameters --> end");
}

// no this parameters
{
  console.log("this parameters --> start");
  function double(this: { value: number }): void {
    this.value = this.value * 2;
    console.log("value after double", this.value);
  }

  const x = {
    value: 3,
    double,
  };

  x.double();

  console.log("Value", x.value);

  console.log("this parameters --> end");
}
