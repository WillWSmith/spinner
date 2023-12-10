const loadingCircle = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

const showLoading = (index) => {
  // Fixed delay for each character
  const fixedDelay = 200;

  // puts the timeout delay in a loop to loop over the loading chars and print accordingly
  setTimeout(() => {
    process.stdout.write(`\r${loadingCircle[index]}   `);
    if(index < loadingCircle.length - 1) {
      showLoading(index + 1);
    } else {
      // new lines at the end for clarity
      process.stdout.write(`\n`);
    }
  }, fixedDelay);
};

showLoading(0);
