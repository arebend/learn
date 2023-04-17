const index = (req, res) => {
   res.status(200).json({
      message: "Hello World"
   })
};

const determineResult = (score) => {
   if (score === 3) {
       return "WIN";
   } else if (score === -1) {
       return "LOSE";
   } else if (score === 0) {
       return "DRAW";
   } else {
       return "UNDEFINED";
   }
}

const calculateStats = (histories) => {
   let totalWin = 0;
   let totalLose = 0;
   let totalDraw = 0;
   histories.forEach(element => {
       // win score 3, lose -1, draw 0
       if (element.score === 3) {
           totalWin += 1;
       } else if (element.score === -1) {
           totalLose += 1;
       } else if (element.score === 0) {
           totalDraw += 1;
       }
   })
   return {
       totalWin,
       totalLose,
       totalDraw,
   };
};

module.exports = {
   index,
   calculateStats,
   determineResult,
};