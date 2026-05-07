function hotelRoom(input) {
    let month = input[0];
    let numberOnNights = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 50.00;
    let studioRent = 65.00;
    let studioPrice1 = 75.20;
    let apartmentPrice1 = 68.70;
    let studioPrice2 = 76.00;
    let apartmentPrice2 = 77.00;
    let apartmentRent = 0;
    
     switch(month) {
    case 'May':
    case 'October':
        studioPrice = 50.00;
        apartmentPrice = 65.00;
        
        studioRent = studioPrice * numberOnNights;
        apartmentRent = apartmentPrice * numberOnNights;

        if (numberOnNights > 14) {
            studioRent *= 0.70;
            apartmentRent *= 0.90;
        } else if (numberOnNights > 7) {
            studioRent *= 0.95;
        }
        break;

        case 'June':
        case 'September':
        studioPrice1 = 75.20;
        apartmentPrice1 = 68.70;

        studioRent = studioPrice1 * numberOnNights;
        apartmentRent = apartmentPrice1 * numberOnNights;

        if (numberOnNights > 14) {
            studioRent *= 0.80;
            apartmentRent *= 0.90;
        }
        break;

        case 'July':
        case 'August':
        studioPrice2 = 76.00;
        apartmentPrice2 = 77.00;

        studioRent = studioPrice2 * numberOnNights;
        apartmentRent = apartmentPrice2 * numberOnNights;

        if (numberOnNights > 14) {
            apartmentRent *= 0.90; 
        }
        break;
     }
     let studioInfo = "Studio: " + studioRent.toFixed(2) + " lv. ";
     let apartmentInfo = "Apartment: " + apartmentRent.toFixed(2) + " lv. ";
     
     console.log(apartmentInfo);
     console.log(studioInfo);  
}