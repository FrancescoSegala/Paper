




export function get_color(row){
  return row.urgent == 'true' ? 'red-row' : '';
}


export function get_color_digital( row ){
  return row.digital == 'true' ? 'green-row' : '';
}

export function get_color_requests(row){
  return row.completed == 'false' ? 'red-row' : '';
}
