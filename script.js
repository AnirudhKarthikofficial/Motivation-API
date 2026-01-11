        // Array of sensory Motivations with details
        // Put ALL Motivations in the listing here
        const motivations = [
            {
                name: "However difficult life may seem, there is always something you can do and succeed at.",
                creator: "Creator: Stephen Hawking"
            },
                        {
                name: "However difficult life may seem, there is always something you can do and succeed at.",
                creator: "Creator: Stephen Hawking"
            },
            
        ];

// set this to null when not being tested
const currentmotivationIndexOverride = null;


        // Function to get the Motivations of the day based on current date in GMT or override
        function getmotivationOfTheDay() {
            if (currentmotivationIndexOverride !== null && currentmotivationIndexOverride >= 0 && currentmotivationIndexOverride < motivations.length) {
                return motivations[currentmotivationIndexOverride];
            }
            const now = new Date();
            console.log("date for Motivations of the day:", now);
            // Get current date in GMT (year, month, day)
            const gmtYear = now.getUTCFullYear();
            console.log(gmtYear)
            const gmtMonth = now.getUTCMonth();
            console.log(gmtMonth)
            const gmtDate = now.getUTCDate();
            console.log(gmtDate)
            // Create a date object for midnight GMT today
            const gmtMidnight = new Date(Date.UTC(gmtYear, gmtMonth, gmtDate));
            // Calculate the number of days since epoch (Jan 1, 1970)
            const daysSinceEpoch = Math.floor(gmtMidnight.getTime() / (1000 * 60 * 60 * 24));
            console.log("epoch since Jan 1, 1970:", daysSinceEpoch);
            // Use modulo to cycle through the toys array
            const motivationIndex = daysSinceEpoch % motivations.length;
            return motivations[motivationIndex];
            console.log("getToyOfTheDay function completed!")
        }

        function displaymotivationOfTheDay() {
            const motivation = getmotivationOfTheDay();
            const motivationDisplay = document.getElementById('motivation-display');
            motivationDisplay.innerHTML = `
                <h3>${motivation.name}</h3>
                <p>${motivation.creator}</p>
            `;
        }

        // Run the display function on page load
        window.onload = displaymotivationOfTheDay;