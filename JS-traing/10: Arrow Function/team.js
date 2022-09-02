const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

team.teamSummary();

{
  /*** Example 2*/
}
const team2 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

team.teamSummary();

/**Example 3*/
const team3 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map(
      function (member) {
        return `${member} is on team ${this.teamName}`;
      }.bind(this)
    );
  },
};

team.teamSummary();

/**Example 4*/
const team4 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',

  //this === team
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

team.teamSummary();
