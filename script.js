
        /* USING PROMISE */

        // const jokes = document.querySelector('#joke');
        // const jokeBtn = document.querySelector('#jokeBtn');
        
        // const generateJokes = () => 
        // {
        //     const setHeaders = {
        //         headers: {
        //             Accept : "application/json"
        //         }
        //     }
         
        
        //     fetch('https://icanhazdadjoke.com/', setHeaders)         //returns promise
        //     .then((res) => res.json())
        //     .then((data) => {
        //         jokes.innerHTML = data.joke;
        //         console.log(data)
        //     }).catch((error) =>{
        //         console.log(error);
        //     })
        // }

        // jokeBtn.addEventListener('click', generateJokes);
        // generateJokes();


        //using async
        /*
        using async for fat function 
            const generateJokes = async () => 
        with normal function
            async function generateJokes() 
        */


        /* USING ASYNC/AWAIT */
        const jokes = document.querySelector('#joke');
        const jokeBtn = document.querySelector('#jokeBtn');
        
        const generateJokes = async () => 
        {
            try{
                const setHeaders = {
                    headers: {
                        Accept : "application/json"
                    }
                }

                const res = await fetch('https://icanhazdadjoke.com/', setHeaders);
                const data = await res.json();
                jokes.innerHTML = data.joke;
            }catch(err){
                console.log(`Error is:----${err}`)
            }
        }

        jokeBtn.addEventListener('click', generateJokes);
        generateJokes();

