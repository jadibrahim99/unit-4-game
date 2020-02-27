/****************************************************************************
 ****************************************************************************
    
    Create an object of Crystal Collector game
    
*****************************************************************************
*****************************************************************************/
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
    
    
        
        this.startNewGame = function() {
            // Reset variables
            targetSum  = 0;
            currentSum = 0;
    
            // Assign a value between 1 and 12 to each crystal
            for (let i = 0; i < numCrystals; i++) {
                crystalValues[i] = randomInteger(1, 12);
    
                // Take a linear combination
                targetSum += randomInteger(1, 6) * crystalValues[i];
            }
    
            // Ensure that the target sum is between 19 and 120
            while (targetSum < 19 || targetSum > 120) {
                targetSum = 0;
    
                for (let i = 0; i < numCrystals; i++) {
                    targetSum += randomInteger(1, 6) * crystalValues[i];
                }
            }
    
            // Display to the browser
            displayNumWins();
            displayNumLosses();
            displayTargetSum();
            displayCurrentSum();
        }
    
        
        //Display Functions

        function displayNumWins() {
            $("#numWins").text(numWins);
        }
    
        function displayNumLosses() {
            $("#numLosses").text(numLosses);
        }
    
        function displayTargetSum() {
            $("#targetSum").text(targetSum);
        }
    
        function displayCurrentSum() {
            $("#currentSum").text(currentSum);
        }
    
    
        // Set update Functions
       
        function updateNumWins(changeBy) {
            numWins += changeBy;
        }
    
        function updateNumLosses(changeBy) {
            numLosses += changeBy;
        }
    
        ///////////Game Mechanics ////////////
        
        // Generate a random number between a and b
        function randomInteger(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a;
        }
        
        this.collectCrystal = function(index) {
            // Update the current sum
            currentSum += crystalValues[index];
    
            displayCurrentSum();
    
            if (currentSum < targetSum) {
                return;
    
            } else if (currentSum === targetSum) {
                updateNumWins(1);
    
                this.startNewGame();
    
            } else {
                updateNumLosses(1);
    
                this.startNewGame();
    
            }
        }
    }
    
    
    
    /****************************************************************************
     ****************************************************************************
        
        Start a new game when the page loads
        
    *****************************************************************************
    *****************************************************************************/
    let game;
    
    $(document).ready(function() {
        game = new CrystalCollector();
    
        game.startNewGame();
    
        
        
        // Response to user click of the crystal
        $(".crystals").on("click", function() {
            game.collectCrystal($(".crystals").index(this));
        });
    
        
    });
