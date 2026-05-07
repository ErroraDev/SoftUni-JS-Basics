function cinemaTickets(input) {
  let movieName = input.shift();
  let totalTickets = 0;
  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;

  while (movieName !== "Finish") {
    let capacity = Number(input.shift());
    let ticketsSold = 0;

    while (true) {
      let ticketType = input.shift();

      if (ticketType === "End" || !ticketType) {
        break;
      }

      switch (ticketType) {
        case "student":
          studentTickets++;
          break;
        case "standard":
          standardTickets++;
          break;
        case "kid":
          kidTickets++;
          break;
        default:
          break;
      }

      ticketsSold++;
      totalTickets++;

      if (ticketsSold >= capacity) {
        break;
      }
    }

    let percentageFull = ((ticketsSold / capacity) * 100).toFixed(2);
    console.log(`${movieName} - ${percentageFull}% full.`);

    movieName = input.shift();
  }

  let studentPercentage = ((studentTickets / totalTickets) * 100).toFixed(2);
  let standardPercentage = ((standardTickets / totalTickets) * 100).toFixed(2);
  let kidPercentage = ((kidTickets / totalTickets) * 100).toFixed(2);

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${studentPercentage}% student tickets.`);
  console.log(`${standardPercentage}% standard tickets.`);
  console.log(`${kidPercentage}% kids tickets.`);
}
