const CrystalCollector = function() {
        /************************************************************************
            
            Private variables
            
        *************************************************************************/
        // Variables for the game
        
        
        const numCrystals   = 4;
        let   crystalValues = new Array(numCrystals);
        
        // Variables for the user
        let numWins = 0, numLosses = 0;
        let targetSum, currentSum;
