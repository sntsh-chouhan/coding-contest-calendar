// ? API to mongodb function

// import https from "https";
import axios from 'axios';
async function codechef_c () {
    try{
        // const response = await fetch('https://www.codechef.com/api/list/contests/all/');
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // const data = await response.json();
        // const currentTime = new Date();
    
        // // Transform and filter data
        // return data.future_contests
        //     .filter(contest => new Date(contest.contest_start_date_iso) > currentTime)
        //     .map(contest => ({
        //         host: "codechef",
        //         name: contest.contest_name,
        //         vanity: contest.contest_code,
        //         url: "https://www.codechef.com/" + contest.contest_code,
        //         startTimeUnix: Math.floor(
        //             new Date(contest.contest_start_date_iso).getTime() / 1000,
        //         ),
        //         duration: contest.contest_duration,
        //     }));

        const response = await axios.get('https://www.codechef.com/api/list/contests/all/');

        // Extracting data from the response
        const data = response.data;
        console.log(data);

    }catch (error) {
        console.error('Error fetching data from CodeChef API:', error);
        return [];
    }
}

// function formatStartTimeIST (start_time) {
//   const date = new Date(start_time);
//   const options = {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//   };
//   const startTimeIST = date.toLocaleString("en-US", options);
//   return startTimeIST;
// }

export default {
  codechef_c,
};
