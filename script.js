const teams = [
    { name: 'FC Barcelona', logo: 'https://img.favpng.com/24/16/16/fc-barcelona-logo-png-favpng-wC2kPDa8b8ybGCiwSXUBf25ca.jpg', votes: 0 },
    { name: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Juventus_Logo.png/1200px-Juventus_Logo.png', votes: 0 },
    { name: 'Manchester United', logo: 'https://e7.pngegg.com/pngimages/480/26/png-clipart-manchester-united-f-c-old-trafford-glory-glory-association-football-manager-football-text-sport.png', votes: 0 },
  ]; //manchester
  
  
  
  for(let i = 0; i < teams.length; i++) {
      const team = teams[i];
      
      // create div for each team. 
      const teamDiv = document.createElement('div');
      
      // add class so we can style
      teamDiv.classList.add("team");
      // create text with teams name. 
      // Daniel start. 
      // create img element
      const image = document.createElement('img');
      // change img source to 
      image.src = team.logo;
      teamDiv.appendChild(image);
      // append child
      
      const namePContent = document.createTextNode(team.name);
      // create element to hold above text
      const p = document.createElement('p');
      p.appendChild(namePContent);
      // add this paragraph to div. 
      teamDiv.appendChild(p);
      // paragraph done. 
  
      // we need button here. 
      const btnElement = document.createElement('button');
      btnElement.innerText = 'Vote';
      teamDiv.appendChild(btnElement);
      // button is done. 
  
      // paragraph
    const voteCountElement = document.createElement("p");
    const textElement = document.createElement("span");
      textElement.innerText = "Vote count:"
    const countElement = document.createElement("span");
      // =================================
    countElement.innerText = team.votes;
      btnElement.addEventListener('click', function(e){
          team.votes += 1;
          countElement.innerText = team.votes;
    })
      // =================================
    voteCountElement.appendChild(textElement);
    voteCountElement.appendChild(countElement);
    teamDiv.appendChild(voteCountElement);
      
      // add our div to wrapper. 
      const wrapper = document.querySelector('.d-flex');
      wrapper.appendChild(teamDiv);
  }
  