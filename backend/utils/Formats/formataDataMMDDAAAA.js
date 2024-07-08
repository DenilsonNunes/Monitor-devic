const formataDataMMDDAAAA = (data) => {

  const [year, month, day] = data.split('-');
  return `${month}-${day}-${year}`;

}

module.exports = formataDataMMDDAAAA;