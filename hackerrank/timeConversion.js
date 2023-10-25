function timeConversion(s) {
    let [hh, mm, ss] = s.slice(0, -2).split(':');
    const am_pm = s.slice(-2);
      // If it's PM and not 12:00:00 PM, add 12 to the hours
       if (am_pm === 'PM' && hh !== '12') {
           hh = String(Number(hh) + 12);
       }
       // If it's AM and it's 12:00:00 AM, set hours to 00
       else if (am_pm === 'AM' && hh === '12') {
           hh = '00';
       }
   
       // Formatting to 24-hour time format
       const formattedTime = `${hh}:${mm}:${ss}`;
       return formattedTime;
   
   }
console.log(timeConversion("07:05:45PM"))