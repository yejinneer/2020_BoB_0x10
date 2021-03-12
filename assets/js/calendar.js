//calendar -->
//http://35.223.121.143:8088/api/date/20200917 방식으로 불러오기
//달력소환 시작 -->


document.addEventListener('DOMContentLoaded', function() {

  var calendarEl = document.getElementById('calendar');
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: '2020-10-02',
    editable: true,
    selectable: true,
    showNonCurrentDates: false,
    dayMaxEvents: false, // allow "more" link when too many events
    eventSources: [
      {
    events: function(start, end, callback) {//calendar print
      var calendarurl = 'https://bob0x10.ga/api/name/' + searchname;
      var datelist = [];
      $.ajax({
        type:"get",
        url : calendarurl,
        async: false,
        dataType: "json",
        success: function(data){
          //console.log(data[0]['datelist']);
          for (var i = 0; i < data[0]['datelist'].length; i++){
                  datelist[i] = data[0]['datelist'][i];      ;
            }
        var events = [];
        //console.log("여기까지 성공" + datelist); //여기까지 나옴 
        
        $.each(data, function() {
          for(var j = 0; j<data[0]['datelist'].length; j++){
          events.push({
            title: "attend",
            start: datelist[j], // will be parsed  
            end: datelist[j] // will be parsed
          });
          }//반복문?
          console.log(events); //출력됨 
        });
        callback(events);
      }
    
      })
    }
  }]
    /*//안나온다...왜지? 
    , eventDidMount:function(events, eventElement) {
      if(events.imageurl) {
          eventElement.find("span.fc-title").prepend("<center><img src='" + events.imageurl + "' width= '10' height= '10' ></center>" );
      }
  }*/

 ,dateClick: function (info) {
alert('Clicked on: ' + info.dateStr);
// 선택된 날짜의 이벤트 목록 가져오기
let str2arr = info.dateStr.split("-");
console.log(str2arr);
clickdate =""+str2arr[0]+""+str2arr[1]+""+str2arr[2];  
document.getElementById("inputdate").value = clickdate;
}
  });
  calendar.render();
});