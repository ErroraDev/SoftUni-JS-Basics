function summerFashion(input) {
    let graduses = Number(input[0]);
    let timeOfDay = input[1];

    let outfit = '';
    let shoes = '';

    switch (timeOfDay) {
        case 'Morning':
            if (graduses <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (graduses <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;
        
        case 'Afternoon':
            if (graduses <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (graduses <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;

        case 'Evening':
            if (graduses <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (graduses <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            break;

    } console.log(`It's ${graduses} degrees, get your ${outfit} and ${shoes}.`);
}