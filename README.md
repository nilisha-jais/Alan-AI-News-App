# Alan-AI-News-App
Conversational voice enabled news application<br>
<a href="https://news-application-alan-ai.netlify.app/">Live</a> ||
<a href="https://youtu.be/f6IvydN_aYs">Video Demo</a>
## Tech Stack 
<ul>
<li>React</li>
<li>Alan AI</li>
<li>Docker</li>
</ul>

## How to Use
Firstly, download [Docker desktop](https://www.docker.com/products/docker-desktop) and follow its
 instructions to install it. This allows us to start using Docker containers.
 
Then run 

    docker-compose build
    
This spins up Compose and builds a local development environment according to 
our specifications in [docker-compose.yml](docker-compose.yml). 

After the containers have been built (this may take a few minutes), run

    docker-compose up
    
This one command boots up a local server (on port 3000). Head over to

    http://localhost:3000/ 
    
and see the application running.<br>
Finally, to gracefully stop running our local servers, you can run
 
    docker-compose down

in a separate terminal window or press __control + C__.


    
  