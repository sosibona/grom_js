const MilisecInOneDay = 86400000;
export const getMostActiveDevs = (objRepo) => {
  const { days, userId, repoId } = objRepo;
  return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(result => {
      const commit = result.filter(elem => new Date(elem['commit']['author']['date']).getTime() >  countDate(days));
      const countCommitByUser = countCommit(commit);
      const sortedList = sortCommit(countCommitByUser);
      const max = getMaxCommit(sortedList);
      return max;
    });
}

const countDate = days => {
  const nowTime = new Date().getTime();
  const pastTime = MilisecInOneDay * days;
  console.log(nowTime - pastTime);
  return nowTime - pastTime;
}

const countCommit = commitsList => {
  const rank = [];
  let counts;
  let set = new Set()
  for (const commit of commitsList) {
    const currentCommit = commit['commit']['author'];
    if (!set.has(currentCommit['name'])) {
      set.add(currentCommit['name'])
      counts = {count: 1, name: currentCommit['name'], email: currentCommit['email']};
      rank.push(counts);
    } else {
      counts.count++;
    }
  }
  return rank;
}

const sortCommit = countCommits => {
  return countCommits.sort((a, b) => b.count - a.count);
}

const getMaxCommit = countSortCommits => {
  console.log(countSortCommits);
  const maxCommits = countSortCommits.filter(commit => commit.count === countSortCommits[0].count);
  return maxCommits;
}


console.log(getMostActiveDevs({days: 10, userId: 'sosibona', repoId: 'calendar'}));

