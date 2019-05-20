const prepareApiQuery = (text) => {
  const fields = ['id', 'name', 'nametype', 'recclass', 'fall'];
  let params = '';
  fields.forEach((field) => {
    params += field +" like '%"+text+"%' or ";
  });
  params = params.substring(0, params.length - 4);
  return params;
}

export default prepareApiQuery;