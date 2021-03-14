function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for(let friend of friends){
    let li = document.createElement('li');
    friend = friend.firstName + ' ' + friend.lastName;
    li.innerHTML = friend;
    ul.append(li);
  }
  return ul;
}

