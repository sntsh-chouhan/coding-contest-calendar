import codechefContests from "../platforms/codechef.js";
// import atcoderContests from "../platforms/atcoder.js";
// import codeforcesContests from "../platforms/codeforces.js";
// import gfgContests from "../platforms/gfg.js";
// import leetcodeContests from "../platforms/leetcode.js";
// import codingninjasContests from "../platforms/codingninjas.js";

export const fetchAllData = async () => {

    // const codingninjasData = await codingninjasContests.codingninjas_c();
    // const leetcodeData = await leetcodeContests.leetcode_c();
    // const atcodeData = await atcoderContests.atcoder_c();
    // const geeksforgeeksData = await gfgContests.geeksforgeeks_c();
    // const codeforcesData = await codeforcesContests.codeforces_c();
    const codechefData = await codechefContests.codechef_c();
  
    // Combine all data and filter out any null values
    const combinedData = [codechefData].filter(d => d !== null);
  
    return combinedData;

    // , atcodeData, leetcodeData, codeforcesData, codingninjasData, geeksforgeeksData
}

