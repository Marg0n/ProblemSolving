const cars = [
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Mustang", year: 2021 },
    { make: "Chevrolet", model: "Malibu", year: 2019 }
  ];
  
  //* Function to sort the array of cars by the year of manufacture in ascending order
  function sortCarsByYear(arrayOfCars) {
    return arrayOfCars.sort((a, b) => a.year - b.year);
  }
  
  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars);
  