/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
/**
 * Create a team object.
 */

const team = {
  name: "WeDo With ShareDo",
  teamSize: 10,
  color: "grey",
  pocketNum: 15,
  subTeamSize: {
    devSize: 5,
    testSize: 5,
  },
  TeamIsAtWork: true,
  toggleWorking: function (workStatus) {
    this.TeamIsAtWork = workStatus;
  },
  newSubTeam: function (dev, test) {
    this.subTeamSize.devSize = dev;
    this.subTeamSize.testSize = test;
  },
};

const markup = (team) => {
  return `
    <div>
      <h3>${team.name}</h3>
      <ul>
        <li>Size: ${team.teamSize}</li>
        <li>Color: ${team.color}</li>
        <li>Number of pockets: ${team.pocketNum}</li>
        <li>Teams: Dev: ${team.subTeamSize.devSize}, Test: ${
    team.subTeamSize.testSize
  } </li>
        <li>Team at work: ${team.toggleWorking ? "Yes" : "No"}</li>
      </ul>
    </div>
  `;
};

const main = document.createElement("main");
main.innerHTML = markup(team);
document.body.appendChild(main);
