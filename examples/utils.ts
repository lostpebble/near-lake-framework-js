const wait = () => new Promise((resolve) => {
  setTimeout(resolve, 1000);
});

export async function waitForever() {
  while (true) {
    await wait();
  }
}

