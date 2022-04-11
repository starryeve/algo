/*
 * @Author: zengfh
 * @Date: 2022-04-11 09:21:11
 * @LastEditTime: 2022-04-11 18:52:06
 * @Description: 
 */

function formatDate(date) {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDay()

  return y + '-' + m + '-' + d
 }

 function getDate(datestr){
  var temp = datestr.split("-");
  var date = new Date(temp[0],temp[1],temp[2]);
  return date;
}
function getValidDates(start,end){
	setTimes= new Array();
	var startTime = getDate(start);
	var endTime = getDate(end);
	while((endTime.getTime()-startTime.getTime())>=0){
 		var year = startTime.getFullYear();
    	var month = startTime.getMonth().toString().length==1?"0"+startTime.getMonth().toString():startTime.getMonth();
  		var day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
		startTime.setDate(startTime.getDate()+1);
		console.log(year+"-"+month+"-"+day);
		var date=year+"-"+month+"-"+day;
	}
}


const dateRange = '2020-9-29'


console.log(getValidDates(dateRange, "2020-10-3"));