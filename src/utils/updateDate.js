export default function updateDate(leadingZero) {
   const date = new Date();
   const year = date.getFullYear();
   const hours = date.getHours();
   const month = String(date).split(' ')[1];
   
   let minutes = date.getMinutes();
   let day = date.getDay();
   
   if (leadingZero) {
      if (String(day).split('').length === 1) {
         day = `0${day}`;
      }

      if (String(minutes).split('').length === 1) {
         minutes = `0${minutes}`;
      }
   }

   return {
      year,
      month,
      day,
      hours,
      minutes,
   };
}
