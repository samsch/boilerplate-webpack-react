const foo = function() {
  console.log('Ran foo()!');
  if(process.env.NODE_ENV !== "production") {
    console.log('Debug mode!');
  }
}

export default foo;
