function withdraw(clients, balances, client, amount) {
  const indexOfClient = clients.indexOf(client);
  const operationMoney = balances[indexOfClient] - amount
  return operationMoney >= 0 ? operationMoney : -1;
}

// console.table(withdraw([1, 2, 3, 4], [100, 100, 100, 100], 3, 55));